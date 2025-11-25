import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="mb-8 sticky top-0 z-50 bg-white shadow">
            {/* Desktop */}
            <div className="hidden lg:flex justify-between items-center p-4">
                <div>
                    <img src="./logo.png" alt="logo" width={100} height={100} className="w-12" />
                </div>
                <ul className="flex items-center gap-6">
                    <li>Over View</li>
                    <li>Project Amentias</li>
                    <li>Project Configuration</li>
                    <li>Project Floor Plan</li>
                    <li>
                        <button className="bg-[#1A4C6D] py-2 px-4 rounded-sm text-white font-semibold">Get in Touch</button>
                    </li>
                </ul>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden justify-between items-center p-4 relative">
                <h2 className="text-[#1A4C6D] font-bold text-lg md:text-xl uppercase">
                    Godrej City Panvel
                </h2>

                {/* Open Button */}
                <button onClick={() => setIsOpen(true)}>
                    <IoIosMenu className="text-2xl" />
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-4 right-4 z-50">
                        {/* Menu Box (shadow only here) */}
                        <div className="bg-white w-64 h-full shadow-lg p-4 ml-auto">
                            <div className="flex justify-end">
                                <button className="" onClick={() => setIsOpen(false)}>
                                    <FaX className="text-xl" />
                                </button>
                            </div>

                            <ul className="flex flex-col items-start gap-6">
                                <li>Over View</li>
                                <li>Project Amentias</li>
                                <li>Project Configuration</li>
                                <li>Project Floor Plan</li>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}