import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
export function ProjectAmenities() {
    const carouselData = [
        { title: "Sitting Area", imgSrc: "./Sitting_Area_Amenities.png" },
        { title: "Outdoor Games", imgSrc: "./OutdoorGames_Amenities.png" },
        { title: "Club House", imgSrc: "./Club_House_Amenities.png" },
        { title: "Multipurpose Hall", imgSrc: "./MultipurposeHall_Amenities.png" },
        { title: "Garden", imgSrc: "./Garden_Amenities.png" },
        { title: "Gymnasium", imgSrc: "./Gymnasium_Amenities.png" },
        { title: "Kids Play Area", imgSrc: "./KidsPlayArea_Amenities.png" },
        { title: "Swimming Pool", imgSrc: "./SwimmingPool_Amenities.png" },
        { title: "Yoga Lawn", imgSrc: "./YogaLawn_Amenities.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const getPrevIndex = () => (currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1);
    const getNextIndex = () => (currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1);

    return (
        <div className="py-4 px-8 mt-10">
            <div className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-[#3D52A1] font-bold text-[28px] md:text-[38px]">
                        PROJECT AMENITIES
                    </h2>
                    <p>
                        Welcome to this 52-hectare township featuring a 9-hole golf course...
                    </p>
                </div>

                <div>
                    <div className="space-y-3">
                        <h2
                            className="text-2xl text-center carousel-title"
                            key={`title-${currentIndex}`}
                        >
                            {carouselData[currentIndex].title}
                        </h2>

                        <div className="flex gap-2 md:gap-4">
                            {/* Left Side Image */}
                            <div className="w-[15%] md:w-[20%] lg:w-[25%] my-auto">
                                <img
                                    src={carouselData[getPrevIndex()].imgSrc}
                                    alt="image"
                                    className="w-full h-[80px] md:h-[200px] lg:h-[300px] object-cover object-right opacity-50 carousel-image-side"
                                />
                            </div>

                            {/* Center Image */}
                            <div className="w-[70%]">
                                <img
                                    src={carouselData[currentIndex].imgSrc}
                                    alt="image"
                                    className="w-full h-full carousel-image-main"
                                    key={`img-${currentIndex}`}
                                />
                            </div>

                            {/* Right Side Image */}
                            <div className="w-[15%] md:w-[20%] lg:w-[25%] my-auto">
                                <img
                                    src={carouselData[getNextIndex()].imgSrc}
                                    alt="image"
                                    className="w-full h-[80px] md:h-[200px] lg:h-[300px] object-cover object-left opacity-50 carousel-image-side"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center items-center py-3 gap-3 mt-2 md:mt-0">
                        <button onClick={handlePrev} className="cursor-pointer border rounded-full p-1 bg-gray-100">
                            <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={handleNext} className="cursor-pointer border rounded-full p-1 bg-gray-100">
                            <FaChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
