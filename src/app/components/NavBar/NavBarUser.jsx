import React from "react";
import { BiLogIn, BiLogOut, BiUserPlus } from "react-icons/bi";

import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";
import { BsCardList, BsChevronDown } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

function NavBarUser() {
  return (
    <li>
      <button
        id="dropdownNavbarUserLink"
        data-dropdown-toggle="dropdownNavbarUser"
        className="flex w-full text-white  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 lg:w-auto items-center "
        type="button"
      >
        HI, SULTAN NUR
        <img
          class="w-8 h-8 ml-3 border-2 rounded-full"
          src={userPhoto}
          alt="user photo"
        />
        <span className="text-xl font-black pl-2">
          <BsChevronDown />
        </span>
      </button>
      <div
        id="dropdownNavbarUser"
        className="z-10 hidden font-normal bg-primary divide-y divide-gray-100 border text-white rounded-lg shadow  "
      >
        <div class="px-4 py-3 text-xxl text-center text-white">
          <div class="font-medium truncate">sultan@gmail.com</div>
        </div>

        <ul className="py-2" aria-labelledby="dropdownLargeButton">
          <li>
            <a
              href="#"
              className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
            >
              <span className=" text-lg font-black mr-2">
                <BsCardList />
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
                <FaHouseUser />
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
                <MdDashboard />
              </span>
              TABLEAU DE BORD
            </a>
          </li>
        </ul>
        <div class="py-2">
          <a
            href="#"
            class="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
          >
            <span className="text-lg font-black pr-2">
              <BiLogOut />
            </span>
            DÉCONNECTER
          </a>
        </div>
      </div>
    </li>
  );
}

export default NavBarUser;
