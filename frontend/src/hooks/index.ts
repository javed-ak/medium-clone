import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface BlogProps {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    }
}

export const useBlog = ({ id } : { id:string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogProps>();
    const navigate = useNavigate()

    try{
        useEffect(() => {
            // getBlog();
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(reponse => {
                setBlog(reponse.data.blog)
                setLoading(false)
            })
        }, [id])
    
        return {
            loading,
            blog
        }
    } catch (e) {
        navigate('/signin')
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const navigate = useNavigate()

    try{
        useEffect(() => {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false)
            })
        }, [])
    
        return {
            loading,
            blogs
        }
    } catch (e) {
        navigate('/signin')
    }
}