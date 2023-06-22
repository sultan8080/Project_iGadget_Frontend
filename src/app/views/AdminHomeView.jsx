import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged, signOut } from "../redux-store/authenticationSlice";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
import AdminDashboardHeader from "../components/Admin/AdminDashboardHeader";
import AdminBody from "../components/Admin/AdminBody";

const AdminHomeView = () => {

  return (
    <div className="antialiased bg-gray-50">
      <AdminDashboardHeader />
     

      <AdminBody />
    </div>
  );
};

export default AdminHomeView;
