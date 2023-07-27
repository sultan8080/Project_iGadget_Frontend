import React, { useState } from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminBody from "../components/Admin/AdminBody";
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
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "../redux-store/authenticationSlice";
import AdminRoutes from "../routes/AdminRoutes";
import Routes from "../routes/Routes";

const AdminHomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };
  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };
  return (
    <div className="antialiased bg-gray-50">
      <AdminBody />
    </div>
  );
};

export default AdminHomeView;
