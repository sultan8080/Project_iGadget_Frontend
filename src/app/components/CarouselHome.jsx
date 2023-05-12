import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const CarouselHome = ({}) => {
  const slides = [
    {
      url: "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/fr_FR/7d204cd60ff1fce24cf6d11f24cd210a.png",
      alt: "Image 1",
    },
    {
      url: "https://w7.pngwing.com/pngs/5/744/png-transparent-macbook-pro-macbook-air-laptop-macbook-electronics-netbook-computer.png",
      alt: "Image 1",
    },
    {
      url: "https://www.vhv.rs/dpng/d/7-72850_new-mobile-phone-png-transparent-png.png",
      alt: "Image 1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselHome;
