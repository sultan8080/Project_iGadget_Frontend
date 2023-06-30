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

      {/* <div
        style={{
          backgroundImage: `url(${formeaccueil})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "50%",
          width: "100%",
          paddingTop: "60%",
          position: "relative",
      }}
      ></div> */}

      <NavBar />

      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  
</nav> */}
    </div>
  );
};

export default NavbarHome;
