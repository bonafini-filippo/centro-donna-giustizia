"use server";

import { getAllUser } from "@/data/user";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const Users = async () => {
    const role = await currentRole();

    if (role !== UserRole.ADMIN) {
        return { error: "Forbidden server action!" }
    }

    return (getAllUser())
}