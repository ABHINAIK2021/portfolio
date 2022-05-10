import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
    const [text, setText] = useState('Software Developer');

    let data = ['Full Stack Developer', 'UI & UX Designer', 'Frontend Developer', 'Backend Developer'];

    useEffect(() => {
        const interval = setInterval(() => {
            const index = Math.floor(Math.random() * data.length);
            setText(data[index]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 mx-auto flex flex-col gap-5 items-center justify-center min-h-screen min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-100 font-semibold">Hello, my name is</div>
            <div className="md:text-6xl text-4xl text-amber-300 font-bold hover:text-amber-500">Abhishek Naik</div>
            <div className="md:text-4xl text-2xl text-gray-100 font-semibold">&amp; I&apos;m a</div>
            <div className="md:text-4xl text-2xl text-amber-300 font-semibold hover:text-amber-500">{text}</div>
            <div className="mt-6 text-center">
                <Link href="/contact"><a className="text-3xl text-gray-100 border-2 border-green-700 rounded-full px-10 py-2 bg-green-700 hover:bg-transparent hover:text-green-700">Hire Me</a></Link>
            </div>
        </div>
    )
}
