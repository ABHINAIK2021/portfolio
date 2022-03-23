export default function SkillsPage() {
    return (
        <div className="bg-zinc-900 mx-auto flex flex-col items-center justify-center min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-100 font-bold">My skills</div>
            <div className="md:text-2xl text-rose-700 font-bold">what i know</div>
            <div className="mt-14 px-10">
                {[
                    ['HTML', '90%'],
                    ['Javascript', '90%'],
                    ['SQL', '90%'],
                    ['Java', '80%'],
                    ['Python', '70%'],
                    ['C#', '70%']
                ].map(([title, percentage]) => (
                    <div className="flex flex-col gap-1 items-center justify-center" key={title}>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-rose-700 bg-rose-100">
                                        {title}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-rose-700">
                                        {percentage}
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-rose-100 lg:w-96 w-64">
                                <div style={{ width: percentage }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-700"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
