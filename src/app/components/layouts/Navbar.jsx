import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";
import SearchInput from "./SearchInput";
import MainNav from "./MainNav";

const Navbar = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <nav className="flex flex-col justify-end">
      <div className="flex flex-wrap items-center justify-between ml-32">
        <a href="/" className="flex items-center">
          <img
            src="src/app/assets/logo_iGadget.png"
            className="h-16 mr-3"
            alt="logo"
          />
        </a>

        <div className="bg-gradient-to-r from-[#3495A2] to-[#87D9D4] rounded-bl-full w-3/5 pr-20 pl-60 py-12">
          <MainNav />

          <SearchInput />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
