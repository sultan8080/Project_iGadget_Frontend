import React from "react";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";

import formeaccueil from "../../assets/formeaccueil.svg";
import SearchInput from "./SearchInput";
import MainNav from "./MainNav";
import logo from "../../assets/logo_iGadget.png";

const NavbarHome = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${formeaccueil})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "70%",
          width: "100%",
          paddingTop: "60%",
          position: "relative",
        }}
      ></div>

      <nav className="flex flex-col justify-end absolute top-0 left-0 w-full">
        <div className="flex flex-wrap items-center justify-between ml-32">
          <a href="/" className="flex items-center z-50">
            <img src={logo} className="h-16 mr-3" alt="logo" />
          </a>

          <div className="w-3/5 pr-20 pl-60 py-12">
            <MainNav />
            <SearchInput />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
