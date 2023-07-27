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
import NavBar from "./components/NavBar/NavBar";

export const SearchContext = createContext();

/**
 * Component RouteWithNavigation
 *
 * @author Peter Mollet et Sultan
 */
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      
      <NavbarHome />

      {/* <NavBar /> */}
      <div className="absolute md:top-[150px] top-[80px] bottom-0 left-0 w-full z-40 h-auto">
        <Routes />
        <Footer />
      </div>

      <ToastContainer />
      <div className="md:top-4 w-full h-auto"></div>
    </SearchContext.Provider>
  );
};

export default App;
