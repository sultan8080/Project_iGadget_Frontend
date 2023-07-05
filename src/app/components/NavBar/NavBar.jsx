import React, { useEffect, useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo_iGadget.png";
import { BiHelpCircle, BiLogIn, BiUserPlus } from "react-icons/bi";
import NavBarUser from "./NavBarUser";
import CategoryList from "./CategoryList";
import NavBarNormal from "./NavBarNormal";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import { Link } from "react-router-dom";

function NavBar() {
  const isLogged = useSelector(selectIsLogged);
  console.log(isLogged);
  return (
    <nav className="flex flex-col absolute top-0 left-0 w-full z-50 ">
      <div className="flex flex-wrap items-center justify-between p-4 z-50 lg:mx-10">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-9 md:h-12 lg:h-16 mr-3" alt="logo" />
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-2xl text-white rounded-lg lg:hidden bg-primary hover:text-secondary "
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <AiOutlineMenuUnfold />
        </button>
        <div
          className="hidden w-full md:absolute md:top-[40px] md:left-[250px] lg:relative lg:top-0 lg:left-0 lg:block lg:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col gap-3 w-full md:w-2/3 lg:w-auto p-4 lg:p-0 mt-4  bg-primary lg:bg-transparent rounded-lg text-lg lg:flex-row lg:mt-0  font-medium">
            <li>
              <CategoryList />
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                <span className="text-xl font-black pr-2">
                  <AiOutlineShoppingCart />
                </span>
                MON PANIER
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                <span className="text-xl font-black pr-2">
                  <BiHelpCircle />
                </span>
                BESOIN D'AIDE
              </Link>
            </li>

            {isLogged ? <NavBarUser /> : <NavBarNormal />}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
