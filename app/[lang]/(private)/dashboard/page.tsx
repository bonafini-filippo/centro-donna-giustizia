"use client"

import { useCurrentUser } from "@/hooks/use-current-user";


const DashboardPage = () => {
    const user = useCurrentUser();
    return (
        <div>
            dashboard page
        </div>
    );
}

export default DashboardPage;