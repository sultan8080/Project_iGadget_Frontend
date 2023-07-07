import React from "react";

import formeaccueil from "../../assets/formeaccueil.svg";
import SearchInput from "./SearchInput";

import NavBar from "../NavBar/NavBar";

const NavbarHome = () => {
  

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
