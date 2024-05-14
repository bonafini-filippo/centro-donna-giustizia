import { ToggleVisibleNews } from "@/actions/news"

const ShowButton = ({ children, id, status }: { children: React.ReactNode, id: string, status: boolean }) => {
    return (
        <div onClick={() => {
            ToggleVisibleNews(id, status)
        }}>
            {children}
        </div>
    )
}

export default ShowButton