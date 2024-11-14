export const BlogSkeleton = () => {
    return (
        <div className="border-b">
            <div className="p-5 animate-pulse flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <div className="rounded-full bg-slate-300 h-6 w-6"></div>
                    <div className="rounded-lg bg-slate-300 h-3 w-20"></div>
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
                <div className="flex gap-2 mt-4">
                    <div className="rounded-lg bg-slate-300 h-2 w-20"></div>
                </div>
            </div>
        </div>
    )
}