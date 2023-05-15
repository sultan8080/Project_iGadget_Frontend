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

const NavbarHome = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${formeaccueil})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "75rem",
          height: "58rem",
          position: "absolute",
          right: "0",
        }}
      ></div>
      <nav className="flex flex-col justify-end relative">
        <div class="flex flex-wrap items-center justify-between ml-32">
          <a href="#" class="flex items-center">
            <img
              src="src/app/assets/logo_iGadget.png"
              class="h-16 mr-3"
              alt="logo"
            />
          </a>

          <div className="w-3/5 pr-20 pl-40 py-12">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul class="flex flex-col justify-between text-xl font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                <li className="flex items-center">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="pl-2">Store </span>
                    <svg
                      class="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbar"
                    class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="#"
                    class="flex items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pl-2"> Mon compte</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="flex items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pl-2">Mon panier</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                  >
                    Besoin d'aide
                  </a>
                </li>
              </ul>
            </div>

            <form class="flex items-center mt-5">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Téléphone"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
