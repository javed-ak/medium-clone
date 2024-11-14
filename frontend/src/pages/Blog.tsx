import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";

export default function Blog() {
  const { id } = useParams();
  const {blog, loading} = useBlog({
    id: id || ''
  });

  if(loading) {
    return <div className="h-screen flex justify-center items-center">
      Loading...
    </div>
  }
  return (
    //@ts-ignore
    <FullBlog blog={blog} />
  )
}
