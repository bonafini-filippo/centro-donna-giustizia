import Unauthorized from "@/components/unauthorized"
import { currentRole } from "@/lib/auth"
import Title from "../_components/title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const page = async ({ params: { lang } }: any) => {

    const role = await currentRole()

    return (
        role !== "ADMIN" ? (
            <div className='md:pt-20 p-2'>
                <Unauthorized lang={lang} />
            </div>
        ) : (
            <Card>
                <CardHeader>
                    <CardTitle className='text-primary text-4xl'>Gestione utenti</CardTitle>
                </CardHeader>
                <CardContent>
                    contenuto della pagina
                </CardContent>
            </Card>
        )
    )
}

export default page