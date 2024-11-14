import { Link } from "react-router-dom"
interface BlogCardProps {
    id: string,
    author: string,
    publishedDate: string,
    title: string,
    content: string
}
export const BlogCard = ({ id, author, publishedDate, title, content}: BlogCardProps) => {

    return (
        <div className="border-b">
            <div className="p-5 ">
                <div className="flex items-center text-sm text-slate-500 gap-2">
                    <Avatar name={author}/> 
                    <div className="text-slate-700 cursor-pointer">{author}</div>
                    <Circle />
                    <div>{publishedDate}</div>
                </div>
                <Link to={`/blog/${id}`}>
                    <div className="font-bold text-xl lg:text-3xl mt-2 cursor-pointer">
                        {title}
                    </div>
                    <div className="text-slate-600 text-sm lg:text-lg cursor-pointer">
                        {content.slice(0, 100) + "..."}
                    </div>
                </Link>
                <div className="text-slate-500 font-light text-xs mt-5">
                    {`${Math.ceil(content.length / 100)} Minutes`}
                </div>
            </div>
        </div>
    )
}

export function Circle() {
    return (
        <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
    )
}

export function Avatar({ name, size = 'small' } : {name: string, size?: 'small' | 'big'}) {
    return (
        <div className={`inline-flex items-center justify-center ${size === 'small' ? 'h-6 w-6' : 'h-8 w-8'} overflow-hidden bg-gray-200 ring ring-gray-400 rounded-full`}>
            <span className={`font-medium ${size === 'small' ? 'text-sm' : 'text-md'} text-gray-600`}>{name[0]}</span>
        </div>
    )
}