import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/logo_iGadget.png";
import StoreList from "./StoreList";

function NavBar() {
  return (
    <nav className="flex flex-col absolute top-0 left-0 w-full ">
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
          className="hidden w-full lg:block lg:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 border  bg-primary lg:bg-transparent border-gray-100 rounded-lg text-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 font-medium">
            <li>
              <StoreList />
            </li>
            <li>
              <a
                href="#"
                className="block rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                
                MON PANIER
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                BESOIN D'AIDE
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full  border-b border-gray-100  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 lg:w-auto text-white"
              >
                CONNEXION
                <span className="text-xl font-black pl-2">
                  <BsChevronDown />
                </span>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-primary border text-white divide-y divide-gray-100 rounded-lg shadow lg:w-44 w-3/4"
              >
                <ul
                  className="py-2 text-sm dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-primary-dark"
                    >
                      SE CONNECTER
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-primary-dark"
                    >
                      INSCRIPTION
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
