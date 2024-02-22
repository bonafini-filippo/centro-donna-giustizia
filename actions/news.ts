"use server"
import { db } from "@/lib/db";
import { NewsSchema } from "@/schemas";
import * as z from "zod";

export const CreateNews = async (values: z.infer<typeof NewsSchema>) => {

    try {
        // Validazione dei campi con Zod
        const validatedFields = NewsSchema.parse(values);

        // Creazione del record nel database utilizzando Prisma
        await db.news.create({
            data: {
                title: validatedFields.title,
                description: validatedFields.description,
                coverImage: validatedFields.coverImage,
                editor: validatedFields.editor,
                images: validatedFields.images,
                secondaryDescription: validatedFields.secondaryDescription,
                date: validatedFields.date
            },
        });

    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la creazione della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};

export const EditNews = async (id: string, values: z.infer<typeof NewsSchema>) => {
    try {
        // Validazione dei campi con Zod
        const validatedFields = NewsSchema.parse(values);

        // modifica del record nel database utilizzando Prisma
        await db.news.update({
            where: {
                id: id
            },
            data: {
                visible: validatedFields.visible,
                title: validatedFields.title,
                description: validatedFields.description,
                coverImage: validatedFields.coverImage,
                editor: validatedFields.editor,
                images: validatedFields.images,
                secondaryDescription: validatedFields.secondaryDescription
            }
        });

    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la modifica della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};

export const ToggleVisibleNews = async (id: string, status: boolean) => {
    try {
        // modifica del record nel database utilizzando Prisma
        await db.news.update({
            where: {
                id: id
            },
            data: {
                visible: !status
            }
        });

    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la modifica della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};


export const DeleteNews = async (id: string) => {
    try {
        // cancellazione del record nel database utilizzando Prisma
        await db.news.delete({
            where: {
                id: id
            }
        });

    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la cancellazione della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};
