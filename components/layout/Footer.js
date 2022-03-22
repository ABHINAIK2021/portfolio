import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
    return (
        <div>
            <footer className="text-center bg-gray-900 text-gray-100 fixed bottom-0 w-full py-5">
                <div className="flex justify-center text-gray-100">
                    <BiCopyright size={25} /><span>&nbsp;2022 All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}
