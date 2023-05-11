import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#349CA2]">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center justify-center">
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" class="mr-4 hover:underline">
                Utilisation des cookies
                <span className="ml-4">|</span>
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline">
                Conditions d'utilisattion
                <span className="ml-4">|</span>
              </a>
            </li>

            <li>
              <a href="#" class="hover:underline">
                Conditions générales de ventes
              </a>
              <span className="ml-4">|</span>
            </li>

            <li>
              <a href="#" class="ml-4 hover:underline">
                Mentions légales
              </a>
              <span className="ml-4">|</span>
            </li>
            <li>
              <a href="#" class="ml-4 hover:underline">
                Plan du site
              </a>
              <span className="ml-4">|</span>
            </li>
            <li>
              <a href="#" class="ml-4 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white sm:text-center">
        Copyright © 2023{" "}
          <a href="http://127.0.0.1:5173" class="hover:underline">
            iGadget™
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
