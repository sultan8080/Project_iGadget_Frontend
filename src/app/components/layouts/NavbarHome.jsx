import React from "react";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";

import formeaccueil from "../../assets/formeaccueil.svg";
import SearchInput from "./SearchInput";

import NavBar from "../NavBar/NavBar";

const NavbarHome = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <div className="relative">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${formeaccueil})` }}
      ></div>
      <NavBar />
    </div>
  );
};

export default NavbarHome;
