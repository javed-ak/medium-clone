import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const {loading, blogs} = useBlogs();

  if(loading){
    return <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          <div className="h-screen flex flex-col justify-center items-center">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
    </div>
    </div>
  }
  return (
    <div>
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
    </div>
  )
}
