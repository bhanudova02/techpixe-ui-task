export function AboutUs() {
    return (
        <div className="py-4 px-6 md:px-8 mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-[90%] mx-auto">
                <div className="border-r-2 pe-4">
                    <img src="./aboutus_1.png" width={100} height={100} className="w-full h-full" alt="" />
                </div>
                <div className=" flex justify-center items-center">
                    <h2 className="text-[#3D52A1] font-extrabold text-[28px] md:text-[38px]">
                        ABOUT BUILDER
                    </h2>
                </div>

                <div className="flex justify-center items-center">
                    <div className="px-5">
                        <p className="text-[14px] lg:text-sm">
                            Established in 1990, Godrej Properties was the first real estate company to get ISO certification. Presently, the company is actively engaged in crafting noteworthy projects in 12 cities throughout India, spanning an impressive expanse of 18.58 million square meters. Renowned for introducing innovation and achieving excellence, Godrej Properties has made significant contributions to the real estate sector.
                        </p>
                        <button className="px-4 mt-3 py-2 text-white bg-[#7191E6] rounded-md">Get in Touch</button>
                    </div>
                </div>
                <div>
                    <img src="./aboutus_2.png" width={100} height={100} className="w-full h-full" alt="" />
                </div>
            </div>

        </div>
    )
}