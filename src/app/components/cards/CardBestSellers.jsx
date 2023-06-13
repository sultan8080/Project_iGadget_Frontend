import React from "react";

const CardBestSellers = ({ product }) => {
  return (
    <div className="title pt-36">
      <div className="title flex gap-24 pt-4 pb-10">
        <hr
          className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"
          width={600}
        />
        <h3 className="font-bold text-end mr-36 pb-5">{product.title}</h3>
      </div>
      <p className="mr-36 text-justify pt-50 pb-5">{product.description}</p>
      <div className="button flex justify-end mr-36">
        <button
          type="button"
          className="text-white bg-[#F6B20C] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Je shop
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#F6B20C] focus:outline-none bg-white rounded-full border border-[#F6B20C] focus:z-10 focus:ring-4"
        >
          Détails du produit
        </button>
      </div>
    </div>
  );
};

export default CardBestSellers;
