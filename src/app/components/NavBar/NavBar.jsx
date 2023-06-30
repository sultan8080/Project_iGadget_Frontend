import React from "react";
import { AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/logo_iGadget.png";
import StoreList from "./StoreList";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { BiHelpCircle, BiLogIn, BiUserPlus } from "react-icons/bi";

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
          className="hidden w-full md:absolute md:top-[40px] md:left-[250px] lg:relative lg:top-0 lg:left-0 lg:block lg:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col gap-3 w-full md:w-2/3 lg:w-auto p-4 lg:p-0 mt-4  bg-primary lg:bg-transparent rounded-lg text-lg lg:flex-row lg:mt-0  font-medium">
            <li>
              <StoreList />
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                <span className="text-xl font-black pr-2">
                  <AiOutlineShoppingCart />
                </span>
                MON PANIER
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white"
              >
                <span className="text-xl font-black pr-2">
                  <BiHelpCircle />
                </span>
                BESOIN D'AIDE
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center w-full hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 lg:w-auto text-white"
              >
                <span className="text-sm font-black pr-2">
                  <FaRegUser />
                </span>
                CONNEXION
                <span className="text-xl font-black pl-2">
                  <BsChevronDown />
                </span>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-primary border text-white rounded-lg shadow lg:w-44 w-11/12 md:w-7/12 "
              >
                <ul className="py-2" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="flex px-4 py-2 text-white hover:bg-primary-dark"
                    >
                      <span className=" text-lg font-black pr-2">
                        <BiLogIn />
                      </span>
                      SE CONNECTER
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
                    >
                      <span className="text-lg font-black pr-2">
                        <BiUserPlus />
                      </span>
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
