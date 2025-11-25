import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OverviewSection() {
    const carouselData = [
        "overview_carouse_1.png","overview_carouse_2.png","overview_carouse_3.png",
        "overview_carouse_4.png","overview_carouse_5.png","overview_carouse_6.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="p-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-4 ">
                <div className="my-auto text-center lg:text-left">
                    <h2 className="text-[#3D52A1] font-bold text-[28px] md:text-[38px] w-full lg:w-[90%]">
                        Godrej City Panvel OVERVIEW
                    </h2>
                    <p>
                        Welcome to this 52-hectare township featuring a 9-hole golf course,
                        surrounded by residential, commercial, and retail hubs...
                    </p>
                </div>

                <div className="flex md:flex-row flex-col-reverse">
                    <div className="w-full overflow-hidden">
                        <img
                            key={currentIndex}
                            src={`./${carouselData[currentIndex]}`}
                            width={100}
                            height={100}
                            alt="img"
                            className="w-full h-full fadeInAnimation"
                        />
                    </div>

                    <div className="ps-4 my-auto mx-auto space-y-4 space-x-3 md:space-x-0">
                        <button 
                            onClick={handlePrevious} 
                            className="cursor-pointer border rounded-full p-1 bg-gray-100 -rotate-90 md:rotate-0"
                        >
                            <FaChevronUp className="w-5 h-5" />
                        </button>

                        <button 
                            onClick={handleNext} 
                            className="cursor-pointer border rounded-full p-1 bg-gray-100 -rotate-90 md:rotate-0"
                        >
                            <FaChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
