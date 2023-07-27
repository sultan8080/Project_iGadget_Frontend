import React from "react";

import AccountList from "./AccountList";
import { connect, useDispatch } from "react-redux";
import { cartItemCountSelector } from "../../redux-store/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLogged } from "../../redux-store/authenticationSlice";

const MainNav = () => {
  const cartItemCount = useSelector((state) => state.cart.cart.length);

  const isConnected = useSelector(selectIsLogged);

  return (
    <>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col justify-between items-center text-xl font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
          {/* <li className="flex items-center">
            <StoreList />
          </li> */}

          <li>
            {isConnected ? (
              <AccountList />
            ) : (
              <div className="text-white flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="/login" className="block px-4 py-2 whitespace-nowrap">
                  Se Connecter
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="/cart"
              className="flex relative items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pl-2 whitespace-nowrap">Mon panier</span>

              {cartItemCount == 0 ? (
                ""
              ) : (
                <span className="whitespace-nowrap absolute bg-third rounded-full text-white w-6 h-6 -bottom-3 -right-7 flex items-center justify-center text-sm">
                  {cartItemCount}
                </span>
              )}
            </a>
          </li>

          <li>
            <Link
              to="/contact"
              className="whitespace-nowrap block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
            >
              Besoin d'aide
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNav;
