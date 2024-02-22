import { Users } from "@/actions/users"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

const UserTable = async () => {
    const users: any = await Users()

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ruolo</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users?.map((row: any) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell align="right">icons</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default UserTable
