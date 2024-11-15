export const FullBlogSkeleton = () => {
    return (
        <div className="p-20 flex">
            <div className="flex flex-col animate-pulse w-2/3 pr-10 gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="rounded-lg bg-slate-300 h-12 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-32"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-18"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-40"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-18"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-12"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-32"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="rounded-lg bg-slate-300 h-12 w-20"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-18"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-40"></div>
                        <div className="rounded-lg bg-slate-300 h-12 w-20"></div>
                    </div>
                    <div>
                        <div className="rounded-lg bg-slate-300 h-3 w-32"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="rounded-lg bg-slate-300 h-40 w-full"></div>
                        <div className="rounded-lg bg-slate-300 h-40 w-full mr-10"></div>

                    </div>
            </div>
            <div className="border-b w-1/3">
                <div className="animate-pulse flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="rounded-lg bg-slate-300 h-4 w-16"></div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <div className="rounded-full bg-slate-300 h-8 w-8"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <div className="rounded-lg bg-slate-300 h-6 w-40"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="rounded-lg bg-slate-300 h-4 w-20"></div>
                                <div className="rounded-lg bg-slate-300 h-4 w-32"></div>
                                <div className="rounded-lg bg-slate-300 h-4 w-44"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="rounded-lg bg-slate-300 h-4 w-20"></div>
                                <div className="rounded-lg bg-slate-300 h-4 w-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}