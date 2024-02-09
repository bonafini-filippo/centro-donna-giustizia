"use server"

import * as z from "zod";
import bycrypt from "bcryptjs";

import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { update } from "@/auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationMail } from "@/lib/mail";

export const settings = async (
    values: z.infer<typeof SettingsSchema>
) => {

    const user = await currentUser();
    if (!user) {
        return { error: "Unauthorized" }
    }

    const dbUser = await getUserById(user.id)
    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email)
        if (existingUser && existingUser.id !== user.id) {
            return { error: "Email already in use!" }
        }
        const verificationToken = await generateVerificationToken(
            values.email
        )
        await sendVerificationMail(
            verificationToken.email,
            verificationToken.token
        );
        return { success: "Verification email sent!" }
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bycrypt.compare(
            values.password,
            dbUser.password,
        );
        if (!passwordMatch) {
            return { error: "Incorrect password" };
        }
        const hashedPassword = await bycrypt.hash(
            values.newPassword,
            10,
        );
        values.password = hashedPassword;
        values.newPassword = undefined;
    }

    const updatedUser = await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values,
        }
    })

    update({
        user: {
            name: updatedUser.email,
            email: updatedUser.email,
            isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
            role: updatedUser.role,
        }
    });


    return { success: "Settings updated!" }
}