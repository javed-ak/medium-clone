export const BlogSkeleton = () => {
    return (
        <div className="flex w-screen  flex justify-center">
            <div className="border-b max-w-3xl w-full">
                <div className="p-4 animate-pulse flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full bg-slate-300 h-6 w-6"></div>
                        <div className="rounded-lg bg-slate-300 h-3 w-20"></div>
                        <div className="rounded-full bg-slate-300 h-1 w-1"></div>
                        <div className="rounded-lg bg-slate-300 h-3 w-28"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="rounded-lg bg-slate-300 h-6 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-6 w-32"></div>
                        <div className="rounded-lg bg-slate-300 h-6 w-32"></div>
                        <div className="rounded-lg bg-slate-300 h-6 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-6 w-40"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="rounded-lg bg-slate-300 h-4 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-4 w-32"></div>
                        <div className="rounded-lg bg-slate-300 h-4 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-4 w-40"></div>
                    </div>
                    <div className="gap-2 my-4 ">
                        <div className="rounded-lg bg-slate-300 h-2 w-16"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}