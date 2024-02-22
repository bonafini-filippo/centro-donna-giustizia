'use client'

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    footer?: true
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    footer,
}: CardWrapperProps) => {
    return (
        <Card>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {footer ?? <CardFooter>
                <div className="flex justify-between w-full">
                    <BackButton
                        label={backButtonLabel}
                        href={backButtonHref}
                    />
                    <BackButton
                        label="Website"
                        href="/"
                    />
                </div>

            </CardFooter>}
        </Card>
    )
}