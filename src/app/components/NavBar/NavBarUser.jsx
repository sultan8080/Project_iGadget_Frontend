import React from "react";
import { BiLogIn, BiUserPlus } from "react-icons/bi";

import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";

function NavBarUser() {
  return (
    <>
      <li>
        <button
          id="dropdownNavbarUserLink"
          data-dropdown-toggle="dropdownNavbarUser"
          className="flex text-sm rounded-full lg:mr-0 focus:ring-4 focus:ring-secondary "
          type="button"
        >
          <img class="w-12 h-12 rounded-full" src={userPhoto} alt="user photo" />
        </button>
        <div
          id="dropdownNavbarUser"
          className="z-10 hidden font-normal bg-primary border text-white rounded-lg shadow lg:w-auto w-11/12 md:w-7/12 "
        >
          <div class="px-4 py-3 text-sm text-white">
            <div>Sultan Nur</div>
            <div class="font-medium truncate">sultan@gmail.com</div>
          </div>

          <ul className="py-2" aria-labelledby="dropdownLargeButton">
            <li>
              <a
                href="#"
                className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className=" text-lg font-black mr-2">
                  <BiLogIn />
                </span>
                <span>MES COMMANDES </span>
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
                MON PROFILE
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
                TABLEAU DE BORD
              </a>
            </li>
          </ul>
          <div class="py-2">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

export default NavBarUser;
