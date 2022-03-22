import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="bg-white mx-auto flex flex-col items-center justify-center min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-900 font-bold">Contact Me</div>
            <div className="md:text-2xl text-rose-700 font-bold">get in touch</div>
            <div className="flex md:flex-row flex-col gap-48 items-center justify-between mt-14 sm:overflow-x-hidden">
                <div className="flex flex-col gap-2 items-start justify-center">
                    <div className="text-2xl font-semibold">Name</div>
                    <div className="text-2xl text-gray-700">Abhishek Naik</div>
                    <div className="text-2xl font-semibold">Address</div>
                    <div className="text-2xl text-gray-700">Dombivali, Mumbai, India</div>
                    <div className="text-2xl font-semibold">Email</div>
                    <div className="text-2xl text-gray-700">Abhishek Naik</div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <div className="text-2xl font-semibold">Message Me</div>
                    <div className="flex flex-col gap-2 items-start justify-center lg:w-96 w-80">
                        <form>
                            <div className="mb-3">
                                <input type="text" id="name" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" id="email" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" id="subject" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Subject" required />
                            </div>
                            <div className="mb-3">
                                <textarea type="textarea" id="message" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Message..." required />
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="text-2xl text-gray-100 border-2 border-rose-700 rounded-md px-6 py-2 bg-rose-700 hover:bg-transparent hover:text-rose-700">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
