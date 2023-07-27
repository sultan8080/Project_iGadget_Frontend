import React from "react";
import { BiSquare } from "react-icons/bi";

function AdminBody() {
  return (
    <>
      <main className="p-4">
        <div className=" dark:border-gray-600 h-screen mb-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-2">
                <span>
                  <BiSquare />
                </span>
                <div className="text-lg pl-3">REVENUS</div>
              </div>
              <div className="flex justify-between border border-gray-500 p-5">
                <div>
                  <div className="text-sm"> LA SEMAINE DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LE MOIS DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LA ANNÉE DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
              </div>
              <div className="flex items-center mb-2 mt-5">
                <span>
                  <BiSquare />
                </span>
                <div className="text-lg pl-3">COMMANDES</div>
              </div>
              <div className="flex justify-between border border-gray-500 p-5">
                <div>
                  <div className="text-sm"> EN COURS </div>
                  <div className="text-2xl font-semi bold mt-1">00000</div>
                </div>
                <div>
                  <div className="text-sm"> LIVRAISON </div>
                  <div className="text-2xl font-semi bold mt-1">00000</div>
                </div>
                <div>
                  <div className="text-sm"> ANNULÉE </div>
                  <div className="text-2xl font-semi bold mt-1">00000</div>
                </div>
              </div>
              <div className="flex items-center mb-2 mt-5">
                <span>
                  <BiSquare />
                </span>
                <div className="text-lg pl-3">VENTES</div>
              </div>
              <div className="flex justify-between border border-gray-500 p-5">
                <div>
                  <div className="text-sm"> CET SEMAINE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LA SEMAINE DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LE MOIS DERNIÈR </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <span>
                  <BiSquare />
                </span>
                <div className="text-lg pl-3">REVENUS</div>
              </div>
              <div className="flex justify-between border border-gray-500 p-5">
                <div>
                  <div className="text-sm"> LA SEMAINE DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LE MOIS DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
                <div>
                  <div className="text-sm"> LA ANNÉE DERNIÈRE </div>
                  <div className="text-2xl font-semi bold mt-1">00000,000€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminBody;
