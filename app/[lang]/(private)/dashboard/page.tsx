"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";


const DashboardPage = () => {
    const user = useCurrentUser();
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-primary text-4xl'>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                contenuto della pagina
            </CardContent>
        </Card>
    );
}

export default DashboardPage;