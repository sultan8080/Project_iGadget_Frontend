import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineDown,
  AiOutlinePlus,
  AiFillEye,
} from "react-icons/ai";
import {
  BsFillClipboard2PulseFill,
  BsFillChatSquareDotsFill,
} from "react-icons/bs";

import { FaSignOutAlt } from "react-icons/fa";

import { VscTypeHierarchySub } from "react-icons/vsc";
import { FaUsers, FaShoppingBasket } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../redux-store/authenticationSlice";
import { URL_HOME } from "../../constants/urls/urlFrontEnd";

function AdminSideBar({}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-gradient-to-b from-[#0c6e7a] to-[#12948b]  h-15 shadow-xl  md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full">
        <div>
          <Link
            to="/dashboard-admin"
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-primary group"
          >
            <BsFillClipboard2PulseFill />
            <span className="ml-3">Tableau de bord</span>
          </Link>
        </div>

        <ul className="space-y-2 pt-5 mt-5  border-t border-gray-400">
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <AiOutlineShoppingCart />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Produits
              </span>
              <AiOutlineDown />
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="/dashboard-admin/products"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiFillEye />
                  <span className="pl-2">Voir Tous</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiOutlinePlus />
                  <span className="pl-1">Ajouter Nouveau</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
              aria-controls="dropdown-category"
              data-collapse-toggle="dropdown-category"
            >
              <VscTypeHierarchySub />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Catégorie
              </span>
              <AiOutlineDown />
            </button>
            <ul id="dropdown-category" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiFillEye />
                  <span className="pl-2">Voir Tous</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiOutlinePlus />
                  <span className="pl-1">Ajouter Nouveau</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-400">
          <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
            >
              <FaShoppingBasket />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Gestion de commandes
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
            >
              <MdAssignmentReturn />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Gestion de Retours
              </span>
            </Link>
          </li>
        </ul>

        <ul className="pt-5 mt-5 space-y-2 border-t  border-gray-400">
          <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
            >
              <BsFillChatSquareDotsFill />
              <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
              <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                4
              </span>
            </Link>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
              aria-controls="dropdown-users"
              data-collapse-toggle="dropdown-users"
            >
              <FaUsers />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Utilisateurs
              </span>
              <AiOutlineDown />
            </button>

            <ul id="dropdown-users" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="/dashboard-admin/users"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiFillEye />
                  <span className="pl-2">Voir Tous</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium rounded-lg transition duration-75 group text-white hover:bg-primary"
                >
                  <AiOutlinePlus />
                  <span className="pl-1">Nouveau Admin</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex items-center bg-primary">
        <div className="font-semibold text-white">BIEVENUE, ADMIN</div>
        <button
          type="button"
          onClick={handleLogOut}
          className="px-4 py-2 hover:bg-primary-dark text-white text-left "
        >
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
}

export default AdminSideBar;
