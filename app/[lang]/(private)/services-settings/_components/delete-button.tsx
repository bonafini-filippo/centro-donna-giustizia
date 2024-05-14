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
        if (onClick) {
            onClick();
        }
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
                        Sicuri di voler eliminare la news?
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