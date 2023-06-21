import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import { URL_ADMIN_HOME } from "../constants/urls/urlFrontEnd";
import { selectHasRole } from "../redux-store/authenticationSlice";

import CarouselHome from "../components/home/CarouselHome";
import BestsellersView from "./BestsallersView";
import Bestsellers from "../components/home/Bestsellers";
import Offres from "../components/home/Offres";


const HomeView = () => {
  // const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
  // const isUser = useSelector((state) => selectHasRole(state, ROLE_USER));
  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-w-[1600px] mx-auto">
      <h2 className="uppercase font-bold absolute mt-6">
        Les <span className="text-[#349CA2]">nouveautés</span>
        <br /> actuelles du shop
      </h2>

      <CarouselHome />

      <Bestsellers />

      <Offres />

      {/* {isAdmin && (
        <button
          className="btn btn-primary"
          onClick={() => navigate(URL_ADMIN_HOME)}
        >
          Admin
        </button>
      )} */}
    </div>
  );
};

export default HomeView;
