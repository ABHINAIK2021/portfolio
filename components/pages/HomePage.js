import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="bg-zinc-900 mx-auto flex flex-col gap-5 items-center justify-center min-h-screen min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-100 font-semibold">Hello, my name is</div>
            <div className="md:text-6xl text-4xl text-gray-100 font-bold">Abhishek Naik</div>
            <div className="md:text-4xl text-2xl text-gray-100 font-semibold">And I&apos;m a Developer</div>
            <div className="mt-6 text-center">
                <Link href="/contact"><a className="text-3xl text-gray-100 border-2 border-rose-700 rounded-md px-6 py-2 bg-rose-700 hover:bg-transparent hover:text-rose-700">Hire Me</a></Link>
            </div>
        </div>
    )
}