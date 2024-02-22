'use client'

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { NewsSchema } from "@/schemas";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CreateNews } from "@/actions/news";
import Link from "next/link";


const NewNews = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<any | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewsSchema>>({
        resolver: zodResolver(NewsSchema),
        defaultValues: {
            title: "",
            visible: true,
            description: "",
            coverImage: "",
            editor: "",
            images: "",
            secondaryDescription: "",
            date: ""
        },
    });

    const onSubmit = (values: z.infer<typeof NewsSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            CreateNews(values).then((result: any) => {
                if (result) {
                    setError(result.error);
                } else {
                    setSuccess("News creata con successo!");
                }
            });
        });
    };

    return (
        <CardWrapper
            headerLabel="Nuova Notizia"
            backButtonLabel="test"
            backButtonHref="/login"
            footer
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className={`space-y-4 ${(success) && "hidden"}`}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titolo</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Jhon Doe" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descrizione breve</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Jhon Doe" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="secondaryDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Testo dell'articolo</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            disabled={isPending}
                                            placeholder="testo"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name="editor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Editore</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="testo"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Data</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="testo"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Immagine</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            {...field}
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending || success}
                        type="submit"
                        className={`${(success) && "hidden"}`}
                    >
                        Invia
                    </Button>
                </form>
            </Form>
            <div className="pt-3 w-full  flex justify-end">
                <Link href="/news-settings">
                    <Button variant="link">Indietro</Button>
                </Link>
            </div>


        </CardWrapper>
    )
}

export default NewNews;