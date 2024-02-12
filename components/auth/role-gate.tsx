import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import Unauthorized from "@/components/unauthorized";
import { any } from "zod";
interface RoleGateProps {
    children: React.ReactNode;
    allowedRoles: UserRole[];
}

export const RoleGate = async ({
    children,
    allowedRoles
}: RoleGateProps) => {
    const role: any = await currentRole();
    if (!allowedRoles.includes(role)) {
        return (
            <Unauthorized />
        );
    }

    return (
        <>
            {children}
        </>
    );
}
