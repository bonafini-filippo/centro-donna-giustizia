import Services from "@/components/services";
import { MetadataServicesPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataServicesPage;

const ServicesPage = () => {
    return (
        <div className="mt-28">
            <Services />
        </div>);
};

export default ServicesPage;