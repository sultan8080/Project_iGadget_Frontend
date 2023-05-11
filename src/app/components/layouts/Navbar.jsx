import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

const Navbar = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <div className="absolute mx-auto w-full px-4 sm:px-6">
      <div className="flex items-center justify-between py-6 md:space-x-10">
        {/* LOGO */}
        <div>
          <Link to={URL_HOME}>
            <img
              className="h-8 w-auto cursor-pointer sm:h-10"
              src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
              alt=""
              width={200}
              height={60}
            />
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col">
          ici
          {/* Search */}
          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
          </form>

        </div>

        {/* SIGN */}
        {/* <div className="flex flex-1 items-center justify-end lg:w-0">
          <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            {isLoggued ? (
              <button className="btn btn-red">Sign Out</button>
            ) : (
              <>
                <Link to={URL_LOGIN}>
                  <div className="link">Sign in</div>
                </Link>
                <Link to={URL_REGISTER}>
                  <button className="btn btn-green">Sign up</button>
                </Link>{" "}
              </>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
