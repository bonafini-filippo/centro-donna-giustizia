'use client'

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    baclButtonHref: string;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    baclButtonHref,
}: CardWrapperProps) => {
    return (
        <Card>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full">
                    <BackButton
                        label={backButtonLabel}
                        href={baclButtonHref}
                    />
                    <BackButton
                        label="Back to Website"
                        href="/"
                    />
                </div>

            </CardFooter>
        </Card>
    )
}