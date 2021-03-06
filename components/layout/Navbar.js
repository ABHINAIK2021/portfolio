import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 w-full">
            <nav className="bg-gradient-to-r from-purple-500 to-pink-500 border-gray-200 px-2 py-3">
                <div className="container flex flex-wrap justify-around items-center mx-auto">
                    <Link href="/">
                        <a className="flex items-center py-2 text-white font-bold text-3xl hover:text-pink-900" style={{ fontFamily: 'cursive' }}>Abhishek Naik</a>
                    </Link>
                    <div className="w-full md:block md:w-auto">
                        <div className="overflow-y-hidden">
                            {[
                                ['Home', '/'],
                                ['About', '/about'],
                                ['Skills', '/skills'],
                                ['Contact', '/contact'],
                                ['Services', '/services']
                            ].map(([title, url]) => (
                                <Link href={url} key={url}>
                                    <a className="px-6 py-3 text-white font-semibold hover:text-pink-900">{title}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
