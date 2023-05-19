import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { URL_HOME } from "../constants/urls/urlFrontEnd";
import Login from "../components/account/Login";
import { selectIsLogged } from "../redux-store/authenticationSlice";
import Registration from "../components/account/Registration";

/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const RegistrationView = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsLogged);

  useEffect(() => {
    if (isAuthenticated) navigate(URL_HOME);
  }, []);

  return (
    <div className="flex h-full items-center pb-10 justify-center">
      <Registration className="" />
    </div>
  );
};

export default RegistrationView;
