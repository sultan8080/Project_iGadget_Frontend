import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import { URL_ADMIN_HOME } from "../constants/urls/urlFrontEnd";
import { selectHasRole } from "../redux-store/authenticationSlice";
import CarouselHome from "../components/CarouselHome";

const HomeView = () => {
  const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
  const navigate = useNavigate();

  const slides = [
    { src: "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/fr_FR/7d204cd60ff1fce24cf6d11f24cd210a.png", alt: "Image 1" },
    { src: "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/fr_FR/7d204cd60ff1fce24cf6d11f24cd210a.png", alt: "Image 1" },
    { src: "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/fr_FR/7d204cd60ff1fce24cf6d11f24cd210a.png", alt: "Image 1" },
  ];
  
  return (
    <div className="max-w-screen mx-24">
      <h2 className="uppercase">
        Les <span className="text-[#349CA2]">nouveautés</span>
        <br /> actuelles du shop
      </h2>

      <CarouselHome/>

      {isAdmin && (
        <button
          className="btn btn-primary"
          onClick={() => navigate(URL_ADMIN_HOME)}
        >
          Admin
        </button>
      )}
    </div>
  );
};

export default HomeView;
