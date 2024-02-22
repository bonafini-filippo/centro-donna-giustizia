import { DeleteNews } from "@/actions/news";

const DeleteButton = ({ children, id, onClick, ...rest }: { children: React.ReactNode, id: string, onClick?: () => void }) => {
    const handleDelete = () => {
        // Esegui il callback onClick se è stato fornito
        if (onClick) {
            onClick();
        }
        // Chiama DeleteNews con l'id
        DeleteNews(id);
    };

    return (
        <div onClick={handleDelete} {...rest}>
            {children}
        </div>
    );
}

export default DeleteButton;