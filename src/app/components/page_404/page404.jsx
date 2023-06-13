import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="bg-white ">
      <div className=" mx-5 lg:mx-24 flex lg:flex-row flex-col lg:items-center lg:justify-center gap-10">
        <div className="mt-8 mx-auto lg:mx-0 w-1/2 lg:w-1/4 lg:mt-0 ">
          <img
            className=" object-cover "
            src="src/app/components/page_404/404_sultan.svg"
            alt="404 image"
          />
        </div>
        <div className="w-auto text-center lg:text-left order-first lg:order-last">
          <div className="font-bold  lg:text-7xl text-5xl text-third">
            404 error
          </div>
          <div className="mt-3 font-semibold lg:text-6xl text-5xl text-secondary ">
            Page non trouvée
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Désolé, la page que vous recherchez n'existe pas.
          </p>

          <div className="flex items-center justify-center lg:justify-start mb-10 mt-6 gap-x-3">
            <Link to="/">
              <div className="flex items-center gap-1 justify-center px-5 py-2 text-sm btn-primary-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span> Page d'accueil</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
