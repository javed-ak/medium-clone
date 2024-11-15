import { motion, useScroll } from "motion/react";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const {loading, blogs} = useBlogs();
  const { scrollYProgress } = useScroll();

  if(loading){
    return <div>
      <Appbar />
      <div className="flex justify-center">
          <div className="h-screen flex flex-col">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
    </div>
    </div>
  }
  return (
    <>
      <motion.div className="fixed top-0 left-0 h-1 w-full bg-green-500 origin-left z-50" style={{ scaleX: scrollYProgress }}/>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map(blog => <BlogCard key={blog.id}
            id={blog.id} 
            author={blog.author.name || 'Anonymous' }
            publishedDate="09 November 2024"
            title={blog.title}
            content={blog.content} />)}
        </div>
      </div>
    </>
  )
}
