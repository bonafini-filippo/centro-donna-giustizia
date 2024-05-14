import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TiPlus } from "react-icons/ti";
import Link from "next/link";
import ServicesTable from "./_components/services-table";
import { getAllServices } from "@/actions/services";

const ServicesPage = async () => {
    const services: any = await getAllServices();

    return (
        <Card className="w-full h-full pb-20 overflow-hidden">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className='text-primary text-4xl'>Servizi</CardTitle>
                    <Link href="/services-settings/new">
                        <Button size={"lg"} className="flex items-center justify-center gap-2">
                            <span className="text-xl">NEW</span>
                            <TiPlus size={27} />
                        </Button>
                    </Link>
                </div>
            </CardHeader>
            <ServicesTable services={services} />
        </Card>
    );
}

export default ServicesPage;