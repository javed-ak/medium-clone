import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="flex justify-between items-center bg-zinc-50 px-10 py-4 border-b sticky top-0">
            <Link to={'/blogs'}>
                <div className="font-bold text-xl">
                    Medium
                </div>
            </Link>
            <div className="flex gap-4 items-center">
                <Link to={'/publish'}>
                    <button className="ring ring-green-500 text-slate-50 bg-green-600 rounded-full font-bold px-5 py-1 hover:bg-slate-50 hover:text-green-500">New</button>
                </Link>
                <Avatar name="Javed" size='big'/>
            </div>
        </div>
    )
}