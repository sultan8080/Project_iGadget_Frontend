import React from "react";

const AsideBasket = () => {
  return (
    <aside className="border w-1/4 p-3">
      <p className="mt-3 text-sm text-gray-500 flex justify-between">
        <span>Valeur de la commande</span>
        <span>1 228</span>
      </p>

      <p className="mt-3 text-sm text-gray-500 flex justify-between">
        <span>Livraison</span>
        <span>GRATUIT</span>
      </p>

      <hr />

      <p className="mt-3 text-sm text-gray-500 flex justify-between">
        <span>Total de la commande</span>
        <span>1 228</span>
      </p>

      <div className="flex justify-center">
        <button className="btn btn-primary mt-12">Terminer ma commande</button>
      </div>
    </aside>
  );
};

export default AsideBasket;
