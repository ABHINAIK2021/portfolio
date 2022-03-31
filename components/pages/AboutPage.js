import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="bg-gray-50 mx-auto flex flex-col items-center justify-center min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-900 font-bold">About Me</div>
            <div className="md:text-2xl text-amber-500 font-bold">who i am</div>
            <div className="flex md:flex-row flex-col gap-10 items-center justify-between mt-10 sm:overflow-x-hidden">
                <div>
                    <Image src="/AbhishekNaik.jpg" alt="Abhishek Naik" className="md:rounded-full rounded-md" width={400} height={400} />
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className="text-2xl font-bold text-center">I&apos;m Abhishek Naik and I&apos;m a Developer</div>
                    <div className="font-semibold text-center">I am from Dombivali. I did my graduation in BSC IT from B. N. Bandodkar College of Science, Thane</div>
                    <div className="font-semibold text-center">I have five months of experience as a software developer.</div>
                    <div className="mt-6 text-center">
                        <Link href="/CV Abhishek Naik.docx"><a className="text-3xl text-gray-100 border-2 border-green-700 rounded-md px-6 py-2 bg-green-700 hover:bg-transparent hover:text-green-700">Download CV</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
