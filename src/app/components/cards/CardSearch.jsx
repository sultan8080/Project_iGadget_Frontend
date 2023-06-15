import React from "react";
import apiBackEnd from "../../api/backend/api.Backend";
import {
  URL_BACK_NO_API,
  URL_BACK_PRODUCT_IMG,
} from "../../constants/urls/urlBackEnd";

const CardSearch = ({ result }) => {
  return (
    <div className="border flex h-60 items-center justify-around mt-8">
      {result.image_name && result.image_name.length > 0 ? (
        <img
          src={URL_BACK_NO_API + URL_BACK_PRODUCT_IMG + result.imageName}
          className="w-64 p-4"
          alt={result.name}
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          className="w-64 p-4"
          alt={result.name}
        />
      )}

      <div className="px-24 w-2/3">
        <span className="text-3xl font-bold pb-6">{result.name}</span>
        <p>{result.description}</p>
      </div>

      <div className="flex flex-col px-10">
        <button
          type="button"
          className="text-white bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 whitespace-nowrap"
        >
          Ajouter au panier
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-secondary focus:outline-none bg-white rounded-full border border-secondary focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap"
        >
          Voir le produit
        </button>
      </div>
    </div>
  );
};

export default CardSearch;
