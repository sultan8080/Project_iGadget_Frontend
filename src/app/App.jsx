import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/layouts/Navbar";
import NavbarHome from "./components/layouts/NavbarHome";
import { selectIsLogged, signIn } from "./redux-store/authenticationSlice";
import Routes from "./routes/Routes";
import { getToken } from "./services/tokenServices";
import Footer from "./components/layouts/Footer";
import "react-toastify/dist/ReactToastify.css";

export const SearchContext = createContext();

const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const IfHomeView = () => {
  const location = useLocation();
  return location.pathname === "/";
};

/**
 * Component RouteWithNavigation
 *
 * @author Peter Mollet
 */
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <NavbarHome />

      <main className="absolute md:top-[150px] top-[80px] left-0 w-full mx-10">
        <Routes />
      </main>
      <ToastContainer />
    </SearchContext.Provider>
  );
};

export default App;
