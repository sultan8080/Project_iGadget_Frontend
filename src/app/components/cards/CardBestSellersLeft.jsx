import React from "react";

const CardBestSellersLeft = ({ product }) => {
  return (
    <div className="ml-40">
      <div className="flex gap-24 pt-4">
        <h3 className="font-bold text-end pb-5 whitespace-nowrap">{product.title}</h3>
        <hr
          className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"
          width={600}
        />
      </div>
      <p className="text-justify pt-50 pb-5">{product.description}</p>
      <div className="button flex mr-36">
        <button
          type="button"
          className="text-white bg-third focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Je shop
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-third focus:outline-none bg-white rounded-full border border-third focus:z-10 focus:ring-4"
        >
          Détails du produit
        </button>
      </div>
    </div>
  );
};

export default CardBestSellersLeft;
