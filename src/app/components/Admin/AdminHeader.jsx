import React from "react";
import { AiOutlineMenuFold, AiFillEye } from "react-icons/ai";
import { BsFillBellFill, BsFillChatSquareDotsFill } from "react-icons/bs";
import { signOut } from "../../redux-store/authenticationSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import logo from "../../assets/logo_iGadget.png";
import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";

function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };
  return (
    <div className="">
      <nav className="border-b px-4 py-2.5 fixed left-0 right-0 top-0 z-50 lg:order-2 bg-gradient-to-l from-[#0c6e7a] via-[#ffffff] to-[#ffffff]  h-15 shadow-md ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <AiOutlineMenuFold />
            </button>
            <a href="/" className="flex items-center justify-between mr-4">
              <img src={logo} className="h-10 mr-3" alt="iGadget logo" />
            </a>
          </div>

          <div className="flex items-center ">
            {/* Notifications */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-white rounded-lg hover:bg-primary-light focus:ring-1 focus:ring-white"
            >
              <BsFillBellFill />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg rounded-xl"
              id="notification-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-white bg-primary">
                Notifications
              </div>
              <div>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/2.jpg"
                      alt="Bonnie Green avatar"
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Juline a acheté 2 produits
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a quelques instants
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Marie a demandé un remboursement
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a 5 minutes
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/3.jpg"
                      alt="Bonnie Green avatar"
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Fred a annulé une commande
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a 10 minutes
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-md font-medium text-center bg-primary hover:bg-primary-dark dark:text-white"
              >
                <div className="inline-flex items-center">
                  <AiFillEye />
                  Voir tout
                </div>
              </a>
            </div>

            {/* MESSAGES */}
            <button
              type="button"
              data-dropdown-toggle="messages-dropdown"
              className="p-2 mr-1 text-white rounded-lg hover:bg-primary-light focus:ring-1 focus:ring-white"
            >
              <BsFillChatSquareDotsFill />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg rounded-xl"
              id="messages-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-white bg-primary">
                Messages
              </div>
              <div>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/4.jpg"
                      alt="Bonnie Green avatar"
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Florian vous a envoyé un message
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a quelques instants
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Jessica vous a envoyé un message
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a 5 minutes
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="src/app/assets/avatar/2.jpg"
                      alt="Bonnie Green avatar"
                    />
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-500">
                      Weessley vous a envoyé un message
                    </div>
                    <div className="text-gray-800 font-normal text-xs mb-1.5 dark:text-gray-600">
                      il y a 10 minutes
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-md font-medium text-center bg-primary hover:bg-primary-dark dark:text-white"
              >
                <div className="inline-flex items-center">
                  <AiFillEye />
                  Voir tout
                </div>
              </a>
            </div>

            {/* USERS  */}

            <button
              type="button"
              className="flex mx-3 text-sm items-center md:mr-0  focus:ring-gray-100"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="font-semibold text-white pr-3 md:inline hidden">
                SULTAN NUR
              </span>
              <img
                className="w-8 h-8 rounded-full"
                src={userPhoto}
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden z-50 my-4 list-none text-white bg-primary-dark shadow rounded-sm"
              id="dropdown"
            >
              <ul className="py-1 w-30" aria-labelledby="dropdown">
                <li>
                  <NavLink
                    to="/dashboard-admin/profile"
                    className="block py-2 px-4 text-sm hover:bg-primary"
                  >
                    Mon Profile
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/dashboard-admin/change-password"
                    className="block py-2 px-4 text-sm hover:bg-primary"
                  >
                    Changer le Mot de passe
                  </NavLink>
                </li>
              </ul>
              <hr />
              <button
                type="button"
                onClick={handleLogOut}
                className="px-4 py-2 hover:bg-primary-dark text-left w-full"
              >
                Déconnecter
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;
