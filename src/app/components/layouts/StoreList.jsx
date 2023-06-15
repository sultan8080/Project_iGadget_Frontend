import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_CATEGORIES } from "../../constants/urls/urlBackEnd";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StoreList = () => {
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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <a href="/all-categories" className="block px-4 py-2">
            Store
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map((menuItem) => (
              <Menu.Item key={menuItem.id}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm capitalize"
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

export default StoreList;
