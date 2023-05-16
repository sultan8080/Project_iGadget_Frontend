import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const CarouselHome = ({ 
  // autoSlide = true, 
  // autoSlideInterval = 3000 
}) => {
  const slides = [
    {
      url: "src/app/assets/test/MacBookPro_gris_3.png",
      alt: "Image 1",
      title: "ThinkBook 13”",
      description:
        "Avec un processeur rapide, une RAM de 16 Go, un disque dur SSD de grande capacité, une carte graphique dédiée, et une résolution d'écran élevée. Le ThinkBook 13” est l’ordinateur portable qu’il vous faut !",
    },
    {
      url: "src/app/assets/test/WatchSE_argent_3.png",
      alt: "Image 1",
      title: "Nova Watch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
    },
    {
      url: "src/app/assets/test/EchoSphere_noir_3.png",
      alt: "Image 1",
      title: "EchoSphere",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  //   useEffect(() => {
  //     const slideInterval = setInterval(() => {
  //       autoSlide();
  //     }, 1000);
  //     return () => clearInterval(slideInterval);
  //   }, []);

  //   function autoSlide(){

  //     console.log(currentIndex);
  //     const nextSlideIndex = (currentIndex + 1);
  //     goToSlide(nextSlideIndex);
  //     setCurrentIndex(nextSlideIndex);

  // }

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <section className="w-full m-auto relative transition-500">
      
      {/* TEXT */}
      <div className="flex items-center">
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

        {/* IMAGE */}
        <img
          src={slides[currentIndex].url}
          className="w-2/3 bg-center bg-no-repeat"
        />
      </div>

      {/* DOT */}
      <div className="flex justify-end">
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
