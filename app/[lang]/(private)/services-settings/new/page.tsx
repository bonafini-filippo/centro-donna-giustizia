'use client'

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { ServicesSchema } from "@/schemas";
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
import { CreateService } from "@/actions/services";


const NewService = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<any | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ServicesSchema>>({
        resolver: zodResolver(ServicesSchema),
        defaultValues: {
            title: "",
            visible: true,
            description: "",
            image: "",
            secondaryDescription: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ServicesSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            CreateService(values).then((result: any) => {
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
            headerLabel="Nuovo Servizio"
            backButtonLabel="back"
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
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Immagine</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Immagine" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="secondaryDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Testo articolo</FormLabel>
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
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending || success}
                        type="submit"
                        className={`${(success) && "hidden"}`}
                    >
                        Crea
                    </Button>
                </form>
            </Form>
            <div className="pt-3 w-full  flex justify-end">
                <Link href="/services-settings">
                    <Button variant="link">Indietro</Button>
                </Link>
            </div>


        </CardWrapper>
    )
}

export default NewService;