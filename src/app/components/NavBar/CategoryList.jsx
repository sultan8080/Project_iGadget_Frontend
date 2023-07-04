import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_CATEGORIES } from "../../constants/urls/urlBackEnd";
import { BsChevronDown } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    apiBackEnd
      .get(URL_BACK_CATEGORIES)
      .then((response) => {
        const sortedItems = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setMenuItems(sortedItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  return (
    <Menu as="div" className=" relative text-left z-50 ">
      <div>
        <Menu.Button className="flex items-center justify-start lg:p-0 md:w-auto  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 text-white ">
          <span className="text-xl font-black">
            <BiCategory />
          </span>

          <span className="mx-2">STORE</span>

          {/* <a href="/all-categories" className="flex items-center justify-between">
          <span>
          STORE
          </span>
        </a> */}

          <span className="text-xl font-black">
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
        <Menu.Items className="absolute left-24 lg:left-0 w-56 origin-top-right rounded-md bg-primary   text-white shadow-lg focus:outline-none">
          <div className="py-1">
            {menuItems.map((menuItem) => (
              <Menu.Item key={menuItem.id}>
                {({ active }) => (
                  <a
                    href="/category-items"
                    className={classNames(
                      active ? "bg-primary-dark" : "text-gray-700",
                      "block border px-4 py-2 text-sm uppercase text-white"
                    )}
                  >
                    {menuItem.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CategoryList;
