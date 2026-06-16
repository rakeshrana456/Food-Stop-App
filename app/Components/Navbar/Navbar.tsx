import { Lock, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
export default function Navbar() {
    return (
        <nav className="relative  px-8 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">   
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                        🍜
                    </div>
                    <h1 className="font-bold text-lg text-black">Food Stop</h1>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                    <a href="#" className="hover:text-black transition">
                        Dine out
                    </a>
                    <a href="#" className="hover:text-black transition">
                        Delivery
                    </a>
                    <a href="#" className="hover:text-black transition">
                        Take-away
                    </a>
                </div>
                <div className='flex items-center gap-8'>
                    <div className="w-8 h-8 border  p-2 rounded-lg bg-white ">
                        <Image
                            src="/navbar/Location icon.png"
                            alt="Location icon"
                            width={24}
                            height={24}
                            className="w-full h-full object-contain cursor-pointer "
                        />
                    </div>
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-87.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search your favourite food"
                            className=" outline-none ml-2 w-full text-sm text-black-400" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <button className="text-xl text-black cursor-pointer"><ShoppingCart /></button>
                    <button className="text-xl text-black cursor-pointer"><Lock /></button>
                </div>

            </div>
        </nav>
    );
}