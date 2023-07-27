import React, { useState, Fragment } from "react";
import { BiLogOut } from "react-icons/bi";
import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";
import { BsCardList, BsChevronDown } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { selectHasRole } from "../../redux-store/authenticationSlice";
import { ROLE_ADMIN } from "../../constants/rolesConstant";
import { MdDashboard } from "react-icons/md";

const NavBarUser = () => {
  const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));

  return (
    <Menu as="div" className=" relative text-left z-50 ">
      <div>
        <Menu.Button className="flex items-center justify-start lg:p-0 md:w-auto  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white ">
          HI, SULTAN NUR
          <img
            className="w-8 h-8 ml-3 border-2 rounded-full"
            src={userPhoto}
            alt="user photo"
          />
          <span className="text-xl font-black pl-2">
            <BsChevronDown />
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-24 lg:left-0 origin-top-right rounded-md bg-primary border  text-white shadow-lg focus:outline-none lg:w-56 w-11/12 md:w-7/12">
          <div className="py-1">
            <Menu.Item as="div">
              <div className="px-4 py-3 text-xxl text-center text-white border-b">
                <div className="font-medium truncate">sultan@gmail.com</div>
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <Link
                to="#"
                className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black mr-2">
                  <BsCardList />
                </span>
                <span>MES COMMANDES</span>
              </Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link
                to="/profil"
                className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black pr-2">
                  <FaHouseUser />
                </span>
                MON PROFILE
              </Link>
            </Menu.Item>
            <Menu.Item as="div">
              {isAdmin && (
                <Link
                  to="/dashboard-admin"
                  className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
                >
                  <span className="text-lg font-black pr-2">
                    <MdDashboard />
                  </span>
                  TABLEAU DE BORD
                </Link>
              )}
            </Menu.Item>

            <Menu.Item as="div">
              <div className="flex items-center px-4 py-2 text-white hover:bg-primary-dark border-t">
                <span className="text-lg font-black pr-2">
                  <BiLogOut />
                </span>
                DÉCONNECTER
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavBarUser;
