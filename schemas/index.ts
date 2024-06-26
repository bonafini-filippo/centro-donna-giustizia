import { UserRole } from "@prisma/client";
import { Description } from "@radix-ui/react-dialog";
import * as z from "zod";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER, UserRole.EDITOR]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }
        return true;
    },
        {
            message: "New password is required!",
            path: ["newPassword"]
        })

    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }
        return true;
    },
        {
            message: "Password is required!",
            path: ["password"]
        })

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    })
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Emial is required"
    })
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Emial is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Emial is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(3, {
        message: "Name is required",
    }),
});

export const NewsSchema = z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    editor: z.string(),
    images: z.string(),
    secondaryDescription: z.string(),
    visible: z.boolean(),
    date: z.string(),
});

export const ServicesSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    secondaryDescription: z.string(),
    visible: z.boolean(),
});


export const RoleSchema = z.object({
    role: z.enum([UserRole.ADMIN, UserRole.USER, UserRole.EDITOR])
})