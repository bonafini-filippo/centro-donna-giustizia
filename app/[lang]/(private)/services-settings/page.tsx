"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ItemCard } from "../_components/item";
import DevelopeMessage from "@/components/develope-message";


const ServicesPage = () => {
    const user = useCurrentUser();
    return (
        <Card className="w-full h-full pb-20 overflow-hidden">
            <CardHeader>
                <CardTitle className='text-primary text-4xl'>Servizi</CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full  overflow-y-auto space-y-7">
                <DevelopeMessage />
            </CardContent>
        </Card>
    );
}

export default ServicesPage;