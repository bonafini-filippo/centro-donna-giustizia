import { DeleteNews } from "@/actions/news";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

const DeleteButton = ({ children, id, onClick, ...rest }: { children: React.ReactNode, id: string, onClick?: () => void }) => {
    const handleDelete = () => {
        // Esegui il callback onClick se è stato fornito
        if (onClick) {
            onClick();
        }
        // Chiama DeleteNews con l'id
        DeleteNews(id);
    };

    return (<>

        <Dialog>
            <DialogTrigger>
                <div{...rest}>
                    {children}
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Elimina</DialogTitle>
                    <DialogDescription>
                        Sicuri di voler eliminare l'articolo?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={handleDelete} >Si</Button>
                    <DialogClose>
                        <Button >No</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>);
}

export default DeleteButton;