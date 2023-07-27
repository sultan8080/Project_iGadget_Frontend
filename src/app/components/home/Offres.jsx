import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const Offres = ({
}) => {
    const slides = [
        {
            url: "./src/app/assets/produits/tablettes/TouchPadPro_gris.png",
            alt: "Image 1",
            title: "TouchPadPro",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla."
        },
        {
            url: "./src/app/assets/produits/ordinateurs/iMac_argent.png",
            alt: "Image 1",
            title: "iMac Argent",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
        },
        {
            url: "./src/app/assets/produits/audios/SoundScape_blanc.png",
            alt: "Image 1",
            title: "SoundScape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien sed metus eleifend egestas. Curabitur posuere, felis eu rhoncus facilisis, elit massa lobortis lectus, eu pharetra orci neque in nulla. ",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(nextIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, slides.length]);

    return (
        <section className="relative transition-500 " >

        
                <div className="bg-[#53B3B5] ]">
                    <div className="titre ">
                        <h2 className="text-center uppercase font-bold mt-2 text-white pt-16 pb-16"> Des <span className=" text-[#349CA2]">Offres</span>  à ne pas manquer !</h2>
                    </div>
                    <div className=" grid grid-cols-2 ">
                        <div className="image bg-[url('./src/app/assets/produits/autre/Rectangle_blanc.svg')] bg-no-repeat flex justify-center bg-[length:29%] bg-[left_calc(40%)_top_calc(42px)]">
                            <img src={slides[currentIndex].url} alt="" width={600} />
                        </div>
                        <div className="title pt-36">
                            <div className="title">
                                <div className=" title flex gap-24 pt-4 pb-10  flex-row-reverse">
                                    <hr className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  white:bg-gray-700 mr-36" width={700} />
                                    <h3 className="font-bold text-end pb-5 text-white"> {slides[currentIndex].title}</h3>
                                </div>
                                <p className="text-justify pt-50 pb-5  mr-36 text-white">{slides[currentIndex].description}</p>
                            </div>
                            <div className="button flex pl-36 gap-4 pt-10">
                                <button
                                    type="button"
                                    className="text-white bg-[#349CA2] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                >
                                    Je shop a prix reduit !
                                </button>
                                <button
                                    type="button"
                                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#349CA2] focus:outline-none bg-white rounded-full border border-[] focus:z-10 focus:ring-4 "
                                >
                                    Détails du produit
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
           

            {/* DOT */}
            <div className="flex justify-center  bg-[#53B3B5]">
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

export default Offres;
