import { MetadataContactsPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataContactsPage;

const ContactsPage = () => {
    return (
        <div className="my-32 flex justify-center items-center text-4xl pt-20 text-primary font-bold">
            COMING SOON..
        </div>
    );
};

export default ContactsPage;