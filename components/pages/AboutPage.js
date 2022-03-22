import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="bg-white mx-auto flex flex-col items-center justify-start min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-900 font-bold">About Me</div>
            <div className="md:text-2xl text-rose-700 font-bold">who i am</div>
            <div className="flex md:flex-row flex-col gap-24 items-center justify-between mt-14 sm:overflow-x-hidden">
                <div>
                    <Image src="/AbhishekNaik.jpg" alt="Abhishek Naik" className="rounded-lg" width={400} height={400} />
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className="text-2xl font-bold text-center">I&apos;m Abhishek Naik and I&apos;m a Developer</div>
                    <div className="font-semibold text-center">I am from Dombivali. I did my graduation in BSC IT from B. N. Bandodkar College of Science, Thane</div>
                    <div className="font-semibold text-center">I have five months of experience as a software developer.</div>
                    <div className="mt-6 text-center">
                        <Link href="/contact"><a className="text-3xl text-gray-100 border-2 border-rose-700 rounded-md px-6 py-2 bg-rose-700 hover:bg-transparent hover:text-rose-700">Download CV</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
