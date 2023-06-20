import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { backEnd } from "../../api/backend/api.Backend";
import {
  URL_BACK_LATEST_PRODUCTS,
  URL_BACK_UPLOADS_MEDIA,
  URL_BACK_NO_API,
} from "../../constants/urls/urlBackEnd";

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const carouselData = () => {
    backEnd
      .get(URL_BACK_LATEST_PRODUCTS)
      .then((response) => {
        const data = response.data;
        console.log("====================================");
        console.log("data : ", data);
        console.log("====================================");
        setSlides(data);
      })
      .catch((error) => {
        console.error("Erreur carousel home page :", error);
      });
  };

  useEffect(() => {
    carouselData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container">
      <section className="w-full m-auto relative">
        {slides.map((item, index) => (
          <React.Fragment key={index}>
            {index === currentIndex && (
              <div className="animate-appear">
                <div className="flex items-center">
                  {/* TEXT */}
                  <div className="w-full">
                    <div className="flex flex-col pr-14">
                      <h2 className="pb-4">{item.name}</h2>
                      <p className="text-justify text-3xl ">
                        {item.description}
                      </p>
                      <div className="flex mt-6">
                        <button
                          type="button"
                          className="text-white bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                        >
                          Je shop
                        </button>
                        <button
                          type="button"
                          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-secondary focus:outline-none bg-white rounded-full border border-secondary focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                          Détails du produit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full">
                    {item.productimages.length > 0 && item.productimages[0].image_name ? (
                      <img
                        src={
                          URL_BACK_NO_API +
                          URL_BACK_UPLOADS_MEDIA +
                          item.productimages[0].image_name
                        }
                        alt={item.name}
                      />
                    ) : (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                        className="w-64 p-4"
                        alt={item.name}
                      />
                    )}
                  </div>
                  
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* DOT */}
        <div className="flex justify-end">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-4rem cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarouselHome;
