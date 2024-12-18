import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"
import { motion } from 'motion/react'

export const Appbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        navigate("/signup");
    };
    
    return (
        <div className="flex justify-between items-center bg-zinc-50 px-10 py-4 border-b sticky top-0 z-20">
            <Link to={'/blogs'}>
                <div className="font-bold text-xl">
                    Medium
                </div>
            </Link>
            <div className="flex gap-4 items-center">
                <Link to={'/publish'}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="ring ring-green-500 text-slate-50 bg-green-600 rounded-full font-bold px-5 py-1">New</motion.button>
                </Link>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={handleLogout} className="ring ring-green-500 text-slate-50 bg-green-600 rounded-full font-bold px-5 py-1">Logout</motion.button>
                <Avatar name="Javed" size='big'/>
            </div>
        </div>
    )
}