import React from "react";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function NavConnexion() {
  return (
    <>
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
        className="z-10 hidden font-normal bg-primary border text-white rounded-lg shadow lg:w-auto w-11/12 md:w-7/12 "
      >
        <ul className="py-2" aria-labelledby="dropdownLargeButton">
          <li>
            <a
              href="#"
              className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
            >
              <span className=" text-lg font-black mr-2">
                <BiLogIn />
              </span>
              <span>SE CONNECTER</span>
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
    </>
  );
}

export default NavConnexion;
