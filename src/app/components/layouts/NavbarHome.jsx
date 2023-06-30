import React from "react";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";

import formeaccueil from "../../assets/formeaccueil.svg";
import SearchInput from "./SearchInput";
import MainNav from "./MainNav";
import logo from "../../assets/logo_iGadget.png";
import { AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import StoreList from "./StoreList";

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

      <nav className="flex flex-col absolute top-0 left-0 w-full">
        {/* <div className="flex flex-wrap items-center justify-between ml-32">
          <a href="/" className="flex items-center z-50">
            <img src={logo} className="h-16 mr-3" alt="logo" />
          </a>

          <div className="w-3/5 pr-20 pl-60 py-12">
            <MainNav />
            <SearchInput />
          </div>
        </div> */}

        <div className="flex flex-wrap items-center justify-between p-4 z-50">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-16 mr-3" alt="logo" />
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-2xl text-white rounded-lg md:hidden hover:text-secondary "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <AiOutlineMenuUnfold />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li className="">
                <StoreList />
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  CONNEXION
                  <BsChevronDown />
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        SE CONNECTER
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        INSCRIPTION
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  MON PANIER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  BESOIN D'AIDE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  
</nav> */}
    </div>
  );
};

export default NavbarHome;
