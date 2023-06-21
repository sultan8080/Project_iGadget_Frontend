import React from "react";

const AsideCart = () => {
  return (
    <aside className="border w-1/4 p-3 h-[17rem]">
      <p className="mt-3 text-gray-500 flex justify-between">
        <span>Valeur de la commande</span>
        <span>1 228 €</span>
      </p>

      <p className="my-3 text-gray-500 flex justify-between">
        <span>Livraison</span>
        <span>GRATUIT</span>
      </p>

      <hr />

      <p className="mt-3 text-gray-500 flex justify-between font-bold">
        <span>Total de la commande</span>
        <span>1 228 €</span>
      </p>

      <div className="flex justify-center">
        <button className="btn btn-primary mt-12">Terminer ma commande</button>
      </div>
    </aside>
  );
};

export default AsideCart;
