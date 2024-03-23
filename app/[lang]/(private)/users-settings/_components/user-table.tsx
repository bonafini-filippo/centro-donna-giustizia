import { Users } from "@/actions/users"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SetRole } from "@/actions/role"
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
                        <TableCell>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder={row.role} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                                    <SelectItem value="USER">USER</SelectItem>
                                    <SelectItem value="EDITOR">EDITOR</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell align="right">icons</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default UserTable
