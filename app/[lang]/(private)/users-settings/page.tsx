import Unauthorized from "@/components/unauthorized"
import { currentRole } from "@/lib/auth"

const page = async ({ params: { lang } }: any) => {

    const role = await currentRole()

    return (
        role !== "ADMIN" ? (
            <div className='md:pt-20 p-2'>
                <Unauthorized lang={lang} />
            </div>
        ) : (
            <div>Pagina di gestione degli utenti</div>
        )
    )
}

export default page