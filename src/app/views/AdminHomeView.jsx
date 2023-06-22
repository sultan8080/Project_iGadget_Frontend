import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged, signOut } from "../redux-store/authenticationSlice";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
import AdminDashboardHeader from "../components/Admin/AdminDashboardHeader";

const AdminHomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };
  return (
    <div className="antialiased bg-gray-50">
      <AdminDashboardHeader />
      {/* <button
        type="button"
        onClick={handleLogOut}
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full border btn-red"
      >
        Déconnecter
      </button> */}
 
    </div>
  );
};

export default AdminHomeView;
