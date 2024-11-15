import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { Appbar } from "../components/Appbar";

export default function Blog() {
  const { id } = useParams();
  const {blog, loading} = useBlog({
    id: id || ''
  });

  if(loading) {
    return <div>
      <Appbar />
      <div className="h-screen flex">
      <FullBlogSkeleton />
      </div>
    </div>
  }
  return (
    //@ts-ignore
    <FullBlog blog={blog} />
  )
}
