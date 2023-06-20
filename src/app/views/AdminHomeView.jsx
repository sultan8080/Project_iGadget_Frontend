import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged, signOut } from "../redux-store/authenticationSlice";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
import Page404 from "../components/page_404/page404";

const AdminHomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => selectIsLogged(state));

  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };
  if (isLoggedIn) {
    return (
      <div className=" text-center">
        <h1 className="mb-10"> Hi, I'am Admin</h1>
        <button
          type="button"
          onClick={handleLogOut}
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full border btn-red"
        >
          Déconnecter
        </button>
      </div>
    );
  }
  return (
    <div>
      <Page404 />
    </div>
  );
};

export default AdminHomeView;
