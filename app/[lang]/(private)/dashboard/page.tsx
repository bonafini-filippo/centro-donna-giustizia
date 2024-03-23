"use client"

import DevelopeMessage from "@/components/develope-message";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";


const DashboardPage = () => {
    const user = useCurrentUser();
    return (
        <Card className="w-full h-full overflow-y-auto">
            <CardHeader>
                <CardTitle className='text-primary  text-4xl'>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <DevelopeMessage />
            </CardContent>
        </Card>
    );
}

export default DashboardPage;