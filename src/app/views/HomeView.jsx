import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselHome from "../components/home/CarouselHome";
import Bestsellers from "../components/home/Bestsellers";
import Offres from "../components/home/Offres";

const HomeView = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col  relative top-0 ">
      <div className="uppercase font-bold absolute md:mt-1 text-xl sm:text-2xl md:text-4xl lg:text-5xl mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        Les <span className="text-[#349CA2]">nouveautés</span>
        <br /> actuelles du shop
      </div>

      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <CarouselHome />
      </div>
      <Bestsellers />
      <Offres />
    </div>
  );
};

export default HomeView;
