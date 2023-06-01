import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#349CA2]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center justify-center">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline">
                Utilisation des cookies
                <span className="ml-4">|</span>
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline">
                Conditions d'utilisattion
                <span className="ml-4">|</span>
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Conditions générales de ventes
              </a>
              <span className="ml-4">|</span>
            </li>

            <li>
              <a href="#" className="ml-4 hover:underline">
                Mentions légales
              </a>
              <span className="ml-4">|</span>
            </li>
            <li>
              <a href="#" className="ml-4 hover:underline">
                Plan du site
              </a>
              <span className="ml-4">|</span>
            </li>
            <li>
              <a href="/contact" className="ml-4 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
        Copyright © 2023{" "}
          <a href="http://127.0.0.1:5173" className="hover:underline">
            iGadget™
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
