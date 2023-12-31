import React from "react";

const CardOrderProfile = ({ order }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(order.orderDate);

  return (
    <section className="flex items-end border p-6  w-2/3 mt-6 cursor-pointer justify-between">
      <div className="flex flex-col w-5/6">
        <span className="font-bold text-2xl">{order.status}</span>
        <span className="text-gray-500">2 article(s)</span>

        <div className="flex">
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
        <span>{formattedDate}</span>
        <span>100 €</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mt-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </section>
  );
};

export default CardOrderProfile;
