"use server"

import { db } from "@/lib/db";
import { ServicesSchema } from "@/schemas";
import slugify from "slugify";
import { z } from "zod";

export const CreateService = async (values: z.infer<typeof ServicesSchema>) => {

    try {
        // Validazione dei campi con Zod
        const validatedFields = ServicesSchema.parse(values);
        const titleMin = validatedFields.title.toLowerCase()
        const slug = slugify(titleMin)
        // Creazione del record nel database utilizzando Prisma
        await db.services.create({
            data: {
                title: validatedFields.title,
                description: validatedFields.description,
                secondaryDescription: validatedFields.secondaryDescription,
                slug: slug,
                image: validatedFields.image
            },
        });
    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la creazione della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};

export const getAllServices = async () => {
    try {
        const services = await db.services.findMany()
        return services;
    } catch {
        return null
    }
}