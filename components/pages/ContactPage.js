import { FaUserAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const onSubmit = async e => {
        e.preventDefault();

        let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        await axios.post(`${router.basePath}/api/contact`, data, {
            headers: { "Content-type": "application/json", },
        }).then((response) => {
            setSubmitted(true);
        }).catch((response) => {
            setSubmitted(false);
        });
    }

    return (
        <div className="bg-gray-50 mx-auto flex flex-col items-center justify-center min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-900 font-bold">Contact Me</div>
            <div className="md:text-2xl text-amber-500 font-bold">get in touch</div>
            <div className="flex md:flex-row flex-col md:gap-24 gap-10 items-center justify-between mt-10 sm:overflow-x-hidden">
                <div className="flex flex-col gap-5 items-start justify-center px-5">
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <FaUserAlt size={25} />
                        <div className="flex flex-col items-start justify-center">
                            <div className="font-semibold">Name</div>
                            <div className="text-gray-700">Abhishek Naik</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <ImLocation size={25} />
                        <div className="flex flex-col items-start justify-center">
                            <div className="font-semibold">Address</div>
                            <div className="text-gray-700">Dombivali, Mumbai, India</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <MdEmail size={25} />
                        <div className="flex flex-col items-start justify-center">
                            <div className="font-semibold">Email</div>
                            <div className="text-gray-700">naikabhi242000@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="flex flex-col gap-2 items-center justify-center lg:w-96 w-80">
                            <div className="text-2xl font-semibold mb-3">Message Me</div>
                            <div className="mb-3">
                                <input type="text" id="name" name="name" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" id="email" name="email" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" id="subject" name="subject" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Subject" required />
                            </div>
                            <div className="mb-3">
                                <textarea type="textarea" id="message" name="message" className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg block lg:w-96 w-80 p-3" placeholder="Message..." required />
                            </div>
                            {submitted ? (<Link href="/"><a className="text-3xl text-gray-100 border-2 border-amber-500 rounded-md px-6 py-2 bg-amber-500 hover:bg-transparent hover:text-amber-500">Thank You</a></Link>) : (<button type="submit" className="text-2xl text-gray-100 border-2 border-green-700 rounded-md px-6 py-2 bg-green-700 hover:bg-transparent hover:text-green-700">Submit</button>)}
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
