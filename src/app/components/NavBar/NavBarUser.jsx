import React from "react";
import { BiLogIn, BiLogOut, BiUserPlus } from "react-icons/bi";

import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";
import { BsCardList, BsChevronDown } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import {
  selectHasRole,
  selectIsLogged,
} from "../../redux-store/authenticationSlice";
import { ROLE_ADMIN, ROLE_USER } from "../../constants/rolesConstant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

function NavBarUser() {
  const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
  const isLogged = useSelector(selectIsLogged);

  if (isLogged) {
    console.log(isLogged);
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
            className="w-8 h-8 ml-3 border-2 rounded-full"
            src={userPhoto}
            alt="user photo"
          />
          <span className="text-xl font-black pl-2">
            <BsChevronDown />
          </span>
        </button>
        <div
          id="dropdownNavbarUser"
          className="hidden text-sm bg-primary divide-y divide-gray-100 border text-white rounded-lg shadow w-56 "
        >
          <div className="px-4 py-3 text-xxl text-center text-white">
            <div className="font-medium truncate">sultan@gmail.com</div>
          </div>

          <ul className="py-2" aria-labelledby="dropdownLargeButton">
            <li>
              <Link
                to="#"
                className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black mr-2">
                  <BsCardList />
                </span>
                <span>MES COMMANDES</span>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black pr-2">
                  <FaHouseUser />
                </span>
                MON PROFILE
              </Link>
            </li>

            {isAdmin && (
              <li>
                <Link
                  to="/dashboard-admin"
                  className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
                >
                  <span className="text-lg font-black pr-2">
                    <MdDashboard />
                  </span>
                  TABLEAU DE BORD
                </Link>
              </li>
            )}
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
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
}

export default NavBarUser;
