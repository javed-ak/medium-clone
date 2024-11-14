import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <Appbar />
            <div className="flex flex-col items-center">
                <div className="">
                    <div className="text-6xl mt-5">
                        <input onChange={(e) => {
                            setTitle(e.target.value);
                        }} type="text" name="title" id="title" placeholder="Title" className="border-l p-5 mb-5 focus:outline-none"/>
                    </div>
                    <div>
                        <textarea onChange={(e) => {
                            setContent(e.target.value)
                        }} name="content" rows={10} id="content" placeholder="Tell Your Story..." className="text-2xl w-full p-5 focus:outline-none"></textarea>
                    </div>
                    <div className="text-right mt-5">
                        <button onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                title,
                                content
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem('token')
                                }
                            });
                            navigate(`blog/${response.data.id}`)
                        }} className="ring ring-green-500 text-slate-50 bg-green-600 rounded-full font-bold px-5 py-1 hover:bg-slate-50 hover:text-green-500">Publish Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}