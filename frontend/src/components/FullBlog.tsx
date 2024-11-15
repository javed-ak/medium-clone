import { BlogProps } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog: BlogProps} ) => {
    return (
    <div>
        <Appbar />
        <div className="p-5 lg:p-20 lg:flex">
            <div className="flex flex-col border-b pb-10 lg:border-none lg:w-2/3 pr-10 gap-2">
                <div className="text-xl lg:text-5xl font-bold">
                    {blog.title}
                </div>
                <div className="text-slate-500 text-sm">
                    Posted on August 24, 2024
                </div>
                <div className="text-justify">
                    {blog.content}
                </div>
            </div>
            <div className="pt-10 lg:w-1/3 lg:pt-0">
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