import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/layouts/Navbar";
import NavbarHome from "./components/layouts/NavbarHome";
import { selectIsLogged, signIn } from "./redux-store/authenticationSlice";
import Routes from "./routes/Routes";
import { getToken } from "./services/tokenServices";
import Footer from "./components/layouts/Footer";

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
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const App = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) dispatch(signIn(token));
    setIsLogin(false);
  }, []);

  const isHomePage = IfHomeView;

  return (
    <div className="flex h-full cursor-default relative flex-col bg-white">
      {isLogged && <IdleTimerCustom />}

      {/* <Navbar /> */}
      {isHomePage() ? <NavbarHome /> : <Navbar />}

      {isLogin ? null : (
        <>
          <main className="mt-24 grow">
            <Routes />
          </main>

          <ToastContainer
            toastClassName={({ type }) =>
              contextClass[type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName={() => "text-sm font-white font-med block p-3"}
            position="bottom-left"
            autoClose={3000}
          />

          <Footer />
        </>
      )}
    </div>
  );
};


export default App;
