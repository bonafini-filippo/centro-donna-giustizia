import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { ImCross } from "react-icons/im";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import Link from "next/link";
import { LogoutButton } from "./auth/logout-button";

const Unauthorized = async ({ dictionaries, lang }: any) => {
    const noAccessDict = dictionaries;

    return (
        <Card className="shadow-md max-w-[900px] mx-auto py-12">
            <CardHeader>
                <h1 className="text-3xl font-semibold text-center flex justify-center items-center gap-2">
                    <ImCross color="red" /> {noAccessDict.title}
                </h1>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-6">
                <p className="text-lg">{noAccessDict.text}</p>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Button className=" text-xl">
                        <Link href="/">
                            {noAccessDict.backButtonLabel}
                        </Link>
                    </Button><LogoutButton>
                        <Button variant="link" className=" text-md">
                            Logout
                        </Button>
                    </LogoutButton>
                </div>

            </CardContent>
        </Card>
    );
}

export default Unauthorized;