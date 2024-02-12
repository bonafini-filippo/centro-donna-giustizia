"use client"

import { useCurrentUser } from "@/hooks/use-current-user";


const DashboardPage = () => {
    const user = useCurrentUser();
    return (
        <div>
            {user?.name}
        </div>

    );
}

export default DashboardPage;