import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaPlus, FaSquareInstagram } from "react-icons/fa6";

export function Contactus() {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-4 px-6 md:px-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[95%] mx-auto">
                <div className="space-y-4">
                    <h2 className="text-[#3D52A1] font-extrabold text-[28px] md:text-[38px]">
                        LOCATION
                    </h2>

                    {/* Accordion Header */}
                    <div
                        className="bg-[#3498DB] text-white p-2 rounded-md flex justify-between items-center cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <button>Key Connectivity Near Godrej Highlands</button>

                        {open ? (
                            <span className="text-3xl font-bold leading-none">−</span>
                        ) : (
                            <FaPlus />
                        )}
                    </div>

                    {/* Smooth Accordion */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out
                            ${open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        <div className="bg-[#1f6fa5] p-3 rounded-md text-white mt-2">
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>International Schools nearby</li>
                                <li>Major Hospitals within 10–15 mins</li>
                                <li>Shopping Malls and Metro Access</li>
                                <li>Business Hubs easily reachable</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6001470698034!2d78.42595207398168!3d17.430966501550575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91007c271547%3A0x8f1ad1b5a8262ea8!2sTechpixe%20India!5e0!3m2!1sen!2sin!4v1764087780431!5m2!1sen!2sin"
                            width={100}
                            height={100}
                            className="w-full h-[310px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Side SAME UI */}
                <div className="space-y-4">
                    <h2 className="text-[#3D52A1] font-extrabold text-[28px] md:text-[38px]">
                        CONTACT US
                    </h2>
                    <div className="space-y-5">
                        <div>
                            <label>Name</label>
                            <input type="text" className="rounded w-full block bg-[#99CBED] px-2 py-2" />
                        </div>
                        <div>
                            <label>MOBILE NUMBER</label>
                            <input type="number" className="rounded w-full block bg-[#99CBED] px-2 py-2" />
                        </div>
                        <div>
                            <label>EMAIL</label>
                            <input type="text" className="rounded w-full block bg-[#99CBED] px-2 py-2" />
                        </div>
                        <button className="p-2 px-6 rounded-2xl font-semibold border border-gray-300">
                            Submit
                        </button>
                    </div>

                    <div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <FaFacebookSquare className="text-3xl" />
                                <div className="block text-xs">FACEBOOK</div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <FaSquareInstagram className="text-3xl" />
                                <div className="block text-xs">INSTAGRAM</div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <FaLinkedin className="text-3xl" />
                                <div className="block text-xs">LINKEDIN</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
