import React, { useState, Fragment } from "react";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const NavBarNormal = () => {
  return (
    <Menu as="div" className=" relative text-left z-50 ">
      <div>
        <Menu.Button className="flex items-center justify-start lg:p-0 md:w-auto  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white ">
          <span className="text-sm font-black pr-2">
            <FaRegUser />
          </span>
          CONNEXION
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
        <Menu.Items className="absolute left-24 lg:left-0 origin-top-right rounded-md bg-primary border  text-white shadow-lg focus:outline-none lg:w-48 w-11/12 md:w-7/12">
          <div className="py-1">
            <Menu.Item>
              <Link
                to="/login"
                className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black mr-2">
                  <BiLogIn />
                </span>
                <span>SE CONNECTER</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/register"
                className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
              >
                <span className="text-lg font-black pr-2">
                  <BiUserPlus />
                </span>
                INSCRIPTION
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavBarNormal;
