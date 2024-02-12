"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";


const GalleryPage = () => {
    const user = useCurrentUser();
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-primary text-4xl'>Galleria</CardTitle>
            </CardHeader>
            <CardContent>
                contenuto della pagina
            </CardContent>
        </Card>
    );
}

export default GalleryPage;