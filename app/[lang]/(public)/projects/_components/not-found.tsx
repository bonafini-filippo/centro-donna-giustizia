import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { ImCross } from "react-icons/im"


export const NotFound = async () => {
    return (
        <Card className="shadow-md max-w-[900px] mx-auto py-12 md:mt-20">
            <CardHeader>
                <h1 className="text-xl md:text-3xl font-semibold text-center flex justify-center items-center gap-2">
                    <ImCross color="red" /> <h1>Servizio non trovato</h1>
                </h1>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-6">
                <p className="lg:text-lg">Il servizio che stai cercando di raggiungere non esiste.</p>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Button className=" text-xl">
                        <Link href="/">
                            Torna alla Home
                        </Link>
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}
