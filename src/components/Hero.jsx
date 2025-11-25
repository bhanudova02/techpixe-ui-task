export function Hero() {
    const avatarImg = [
        "./avatar/Ellipse1.png",
        "./avatar/Ellipse2.png",
        "./avatar/Ellipse3.png",
        "./avatar/Ellipse4.png",
        "./avatar/Ellipse5.png",
        "./avatar/Ellipse6.png",
        "./avatar/Ellipse7.png",
        "./avatar/Ellipse8.png",
        "./avatar/Ellipse9.png",
        "./avatar/Ellipse10.png",
        "./avatar/Ellipse11.png",
        "./avatar/Ellipse12.png",
        "./avatar/Ellipse13.png",
    ];
    return (
        <div className="px-1">
            <div className=" relative">
                <div className="hero_rounded_box absolute top-0 left-0 w-fit bg-white px-4 py-1 rounded-br-[20px]">
                    <div className="space-y-3">
                        {/* Desktop: show all */}
                        <div className="hidden lg:flex items-center -space-x-4">
                            {avatarImg.map((img, i) => (
                                <img key={i} src={img} className="w-10 h-10" />
                            ))}
                        </div>

                        {/* Tablet: show only first 6 */}
                        <div className="flex lg:hidden items-center -space-x-4">
                            {avatarImg.slice(0, 6).map((img, i) => (
                                <img key={i} src={img} className="w-7 h-7 md:w-10 md:h-10" />
                            ))}
                        </div>
                        <h3 className="text-[8px] md:text-[13px] lg:text-[24px] font-semibold">3.2k satisfied customer </h3>
                    </div>
                </div>

                <div className="absolute bottom-0 right-14 md:right-28 bg-white p-2 rounded-t-full">
                    <img src="./hero_bottom_img.png" width={100} height={100} alt="img" className="w-14 md:w-20 lg:w-28" />
                </div>

                <div className="absolute right-1 md:right-10 top-6 md:top-6 md:space-y-3 ">
                    <h1 className="text-white ms-2 md:ms-0 font-extrabold leading-8 md:leading-none w-[80%] md:w-full text-center  text-[25px]  md:text-[50px] lg:text-[80px] text-shadow-2xs text-shadow-gray-500">Mr.housing india</h1>
                    <p className="text-center text-sm md:text-xl lg:text-3xl text-shadow-2xs text-shadow-blue-100">A Life of Wellness & Luxury Awaits!</p>
                </div>

                <img
                    src="./hero_main_img.png"
                    width={100}
                    height={100}
                    alt="hero_main_img"
                    className="w-full h-[290px] md:h-full"
                />
            </div>
        </div>
    )
}
