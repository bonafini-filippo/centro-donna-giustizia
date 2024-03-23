import DevelopeMessage from "@/components/develope-message";
import { MetadataContactsPage } from "@/lib/pages";
import { Metadata } from "next";
export const metadata: Metadata = MetadataContactsPage;

const ContactsPage = () => {
    return (

        <DevelopeMessage />
    );
};

export default ContactsPage;