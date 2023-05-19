import React from "react";

const CardOrderProfile = ({ order }) => {
  return (
    <section className="flex items-end border p-6  w-2/3 mt-6 cursor-pointer justify-between">
      <div className="flex flex-col w-5/6">
        <span className="font-bold text-2xl">{order.status}</span>
        <span className="text-gray-500">2 article(s)</span>

        <div className="flex">
          {/* Checking if order.picture is an array using Array.isArray() */}
          {Array.isArray(order.pictures) ? (
            order.pictures.map((picture, index) => (
              <img
                key={index}
                src={picture}
                className="w-1/5"
                alt={`Picture ${index}`}
              />
            ))
          ) : (
            <img src={order.pictures} className="w-1/5" alt="Order Picture" />
          )}

        </div>
      </div>
      <div className="flex flex-col text-gray-500 items-end">
        <span>{order.date}</span>
        <span>{order.price} €</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mt-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </section>
  );
};

export default CardOrderProfile;
