import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

import formeaccueil from "../../assets/formeaccueil.svg";
import SearchInput from "./SearchInput";
import MainNav from "./MainNav";

const NavbarHome = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${formeaccueil})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          width: "75rem",
          height: "65rem",
          position: "absolute",
          right: "0",
        }}
      ></div>
      <nav className="flex flex-col justify-end relative">
        <div className="flex flex-wrap items-center justify-between ml-32">
          <a href="/" className="flex items-center">
            <img
              src="src/app/assets/logo_iGadget.png"
              className="h-16 mr-3"
              alt="logo"
            />
          </a>

          <div className="w-3/5 pr-20 pl-60 py-12">
            <MainNav />

            <SearchInput />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
