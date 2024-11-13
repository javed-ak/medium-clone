export default function Blog() {
  return (
    <div className="p-20  flex">
      <div className="flex flex-col w-2/3 pr-10 gap-2">
        <div className="text-5xl font-bold">
            Title of The Blog Post
        </div>
        <div className="text-slate-500 text-sm">
            Posted on August 24, 2024
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nam mollitia quisquam, ab at blanditiis sit sunt amet ut rem fuga illo, sint quam unde quibusdam tempora nobis doloribus eos porro nesciunt aliquam suscipit fugiat quia modi. Iure est impedit inventore quaerat voluptatibus accusantium sit rem suscipit! Non magni perspiciatis consequatur voluptate provident odit quo unde voluptatibus modi error ipsa id sed, natus officiis enim laborum sequi dolor similique ipsum? Error quos, dolores perferendis assumenda veniam cumque illo praesentium illum ipsum. Provident accusamus, tenetur eos neque ipsam praesentium, non, maiores adipisci velit debitis blanditiis. Libero aliquam pariatur rem doloribus ullam.
        </div>
      </div>
      <div className="w-1/3">
        Author
        <div className="flex justify-center items-center gap-4">
            <div className="bg-slate-900 text-slate-50 p-3 font-bold rounded-full inline">
                J
            </div>
            <div>
                <div className="font-bold text-xl">
                    Jokester
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam?
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
