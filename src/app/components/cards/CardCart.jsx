import React from "react";

const CardCart = ({ product }) => {
  return (
    <li key={product.id} className="flex p-6 mb-12 border">
      <div className="h-48 w-52 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-between text-gray-900">
            <h3 className="text-lg">
              <a href={product.href}>{product.name}</a>
            </h3>
            <button
              type="button"
              className="font-medium text-grey-500 hover:text-grey-300 ml-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="">{product.price}</p>
          <p className="mt-3 text-sm text-gray-500">
            Référence : {product.ref}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Couleur : {product.color}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between w-full pt-1">
          <select className="py-2 border border-gray-200 mr-6 focus:outline-none">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
      </div>
    </li>
  );
};

export default CardCart;
