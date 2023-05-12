import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const CarouselHome = ({}) => {
  const slides = [
    {
      url: "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/fr_FR/7d204cd60ff1fce24cf6d11f24cd210a.png",
      alt: "Image 1",
      title: "Mac",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
    },
    {
      url: "https://w7.pngwing.com/pngs/5/744/png-transparent-macbook-pro-macbook-air-laptop-macbook-electronics-netbook-computer.png",
      alt: "Image 1",
      title: "MacBook",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
    },
    {
      url: "https://www.vhv.rs/dpng/d/7-72850_new-mobile-phone-png-transparent-png.png",
      alt: "Image 1",
      title: "IPhone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="max-w-[1400px] h-[780px] w-full m-auto py-16 relative group">
      {/* IMAGE */}
      <div className="flex">
        <div className="flex flex-col pr-14">
          <h3 className="pb-4">{slides[currentIndex].title}</h3>
          <p className="text-justify">{slides[currentIndex].description}</p>
          <div className="flex mt-6">
            <button
              type="button"
              class="text-white bg-[#87D9D4] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Je shop
            </button>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#87D9D4] focus:outline-none bg-white rounded-full border border-[#87D9D4] focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              Détails du produit
            </button>
          </div>
        </div>
        <img
          src={slides[currentIndex].url}
          className="w-[920px] h-[480px] bg-center bg-no-repeat"
        />
      </div>

      {/* DOT */}
      <div className="flex top-4 justify-end py-2">
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
    </section>
  );
};

export default CarouselHome;
