import { BlogProps } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog: BlogProps} ) => {
    return (
    <div>
        <Appbar />
        <div className="p-20  flex">
            <div className="flex flex-col w-2/3 pr-10 gap-2">
                <div className="text-5xl font-bold">
                    {blog.title}
                </div>
                <div className="text-slate-500 text-sm">
                    Posted on August 24, 2024
                </div>
                <div>
                    {blog.content}
                </div>
            </div>
            <div className="w-1/3">
                Author
                <div className="flex justify-center items-center gap-3 mt-3">
                    <div>
                        <Avatar name={blog.author.name || 'Anonymous'} size="big" />
                    </div>
                    <div>
                        <div className="font-bold text-xl">
                            {blog.author.name || 'Anonymous'}
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}