import { FaPaintBrush } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineCloudServer } from 'react-icons/ai'

export default function ServicesPage() {
    return (
        <div className="bg-gray-900 mx-auto flex flex-col items-center justify-center min-h-screen py-24 min-w-fit">
            <div className="md:text-4xl text-2xl text-gray-100 font-bold">My Services</div>
            <div className="md:text-2xl text-amber-500 font-bold">what i provide</div>
            <div className="flex lg:flex-row flex-col gap-5 items-center justify-between mt-14 px-10">
                <div className="bg-cyan-700 lg:w-96 md:w-80 w-60 h-60 rounded-lg overflow-hidden shadow-lg flex items-center justify-center hover:bg-amber-500">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center text-gray-100 hover:text-cyan-700">
                            <FaPaintBrush size={50} />
                        </div>
                        <div className="text-gray-100 text-4xl font-semibold hover:text-cyan-700">Web Design</div>
                    </div>
                </div>
                <div className="bg-cyan-700 lg:w-96 md:w-80 w-60 h-60 rounded-lg overflow-hidden shadow-lg flex items-center justify-center hover:bg-amber-500">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center text-gray-100 hover:text-cyan-700">
                            <BiCodeAlt size={50} />
                        </div>
                        <div className="text-gray-100 text-4xl font-semibold hover:text-cyan-700">Develpment</div>
                    </div>
                </div>
                <div className="bg-cyan-700 lg:w-96 md:w-80 w-60 h-60 rounded-lg overflow-hidden shadow-lg flex items-center justify-center hover:bg-amber-500">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center text-gray-100 hover:text-cyan-700">
                            <AiOutlineCloudServer size={50} />
                        </div>
                        <div className="text-gray-100 text-4xl font-semibold hover:text-cyan-700">Deployment</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
