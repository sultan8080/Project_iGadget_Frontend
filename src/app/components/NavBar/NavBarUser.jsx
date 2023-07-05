import React, { useState, Fragment } from "react";
import {  BiLogOut } from "react-icons/bi";
import userPhoto from "../../assets/avatar/Admin-Photo-1.jpg";
import { BsCardList, BsChevronDown } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";


// function NavBarUser() {
//   const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
//   const isLogged = useSelector(selectIsLogged);

//   // if(!isLogged){
//   //   return
//   //   <>
//   //   </>
//   // }

//   return (
//     <>

//       <li>

//         <button
//           id="dropdownNavbarUserLink"
//           data-dropdown-toggle="dropdownNavbarUser"
//           className="flex w-full text-white  hover:bg-primary-dark lg:border-0 lg:px-3 lg:py-1 lg:w-auto items-center "
//           type="button"
//         >
//           HI, SULTAN NUR
//           <img
//             className="w-8 h-8 ml-3 border-2 rounded-full"
//             src={userPhoto}
//             alt="user photo"
//           />
//           <span className="text-xl font-black pl-2">
//             <BsChevronDown />
//           </span>
//         </button>
//         <div
//           id="dropdownNavbarUser"
//           className="hidden text-sm bg-primary divide-y divide-gray-100 border text-white rounded-lg shadow w-56 "
//         >
//           <div className="px-4 py-3 text-xxl text-center text-white">
//             <div className="font-medium truncate">sultan@gmail.com</div>
//           </div>

//           <ul className="py-2" aria-labelledby="dropdownLargeButton">
//             <li>
//               <Link
//                 to="#"
//                 className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
//               >
//                 <span className="text-lg font-black mr-2">
//                   <BsCardList />
//                 </span>
//                 <span>MES COMMANDES</span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="#"
//                 className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
//               >
//                 <span className="text-lg font-black pr-2">
//                   <FaHouseUser />
//                 </span>
//                 MON PROFILE
//               </Link>
//             </li>

//             {isAdmin && (
//               <li>
//                 <Link
//                   to="/dashboard-admin"
//                   className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
//                 >
//                   <span className="text-lg font-black pr-2">
//                     <MdDashboard />
//                   </span>
//                   TABLEAU DE BORD
//                 </Link>
//               </li>
//             )}
//           </ul>
//           <div className="py-2">
//             <a
//               href="#"
//               className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
//             >
//               <span className="text-lg font-black pr-2">
//                 <BiLogOut />
//               </span>
//               DÉCONNECTER
//             </a>
//           </div>
//         </div>
//       </li>
//     </>
//   );
// }

// export default NavBarUser;



const NavBarUser = () => {

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
        <Menu.Items className="absolute left-24 lg:left-0 origin-top-right rounded-md bg-primary border  text-white shadow-lg focus:outline-none lg:w-48 w-11/12 md:w-7/12">
          <div className="py-1">
            <Menu.Item>
              <div className="px-4 py-3 text-xxl text-center text-white">
                <div className="font-medium truncate">sultan@gmail.com</div>
              </div>
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className="flex items-center w-full px-4 py-2 text-white hover:bg-primary-dark"
                >
                  <span className="text-lg font-black mr-2">
                    <BsCardList />
                  </span>
                  <span>MES COMMANDES</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className="flex items-center px-4 py-2 text-white hover:bg-primary-dark"
                >
                  <span className="text-lg font-black pr-2">
                    <FaHouseUser />
                  </span>
                  MON PROFILE
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
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
