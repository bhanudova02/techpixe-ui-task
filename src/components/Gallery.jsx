import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export function Gallery() {
    const galleryItems = ["./gallery_1.png", "./gallery_2.png", "./gallery_3.png"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? galleryItems.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === galleryItems.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="py-4 px-6 md:px-8 mt-10 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-[#3D52A1] font-extrabold text-[28px] md:text-[38px]">
                    GALLERY
                </h2>
                <div>
                    <div className="flex gap-3 items-center">
                        <button
                            onClick={handlePrev}
                            className="cursor-pointer border rounded-full p-1 bg-gray-100"
                        >
                            <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="cursor-pointer border rounded-full p-1 bg-gray-100"
                        >
                            <FaChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img
                        src={galleryItems[currentIndex]}
                        width={100}
                        height={100}
                        alt="gallery"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
