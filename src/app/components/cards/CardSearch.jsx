import React from "react";

const CardSearch = ({ result }) => {
  return (
    <div className="border flex h-60 items-center justify-around mt-8">
      {/* Image pour test le CSS : */}
      <img src="src/app/assets/test/AuroraMax_rose.png" className="w-64" />

      <div className="px-24 w-2/3">
        <span className="text-3xl font-bold pb-6">{result.name}</span>
        <p>{result.description}</p>
      </div>

      <div className="flex flex-col px-10">
        <button
          type="button"
          className="text-white bg-[#87D9D4] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 whitespace-nowrap"
        >
          Ajouter au panier
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#87D9D4] focus:outline-none bg-white rounded-full border border-[#87D9D4] focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap"
        >
          Voir le produit
        </button>
      </div>
    </div>
  );
};

export default CardSearch;
