import React from "react";
import CardOrderProfile from "../components/cards/CardOrderProfile";
import { BsArrowReturnLeft } from "react-icons/bs";

const orders = [
  {
    id: 1,
    status: "En cours",
    nb_article: 2,
    date: "22-03-2023",
    price: "1 228,00",
    pictures: [
      "src/app/assets/test/WatchSE_argent_3.png",
      "src/app/assets/test/MacBookPro_gris_3.png",
    ],
  },
  {
    id: 2,
    status: "Colis livré",
    nb_article: 1,
    date: "18-01-2023",
    price: "159,00",
    pictures: "src/app/assets/test/WatchSE_argent_3.png",
  },
  {
    id: 3,
    status: "Colis livré",
    nb_article: 1,
    date: "18-01-2023",
    price: "159,00",
    pictures: "src/app/assets/test/WatchSE_argent_3.png",
  },
];

const ordersReturns = [
  {
    id: 1,
    status: "Returns effectué",
    nb_article: 2,
    date: "22-03-2023",
    price: "1 228,00",
    pictures: "src/app/assets/test/EchoSphere_noir_3.png"
  }
];

const ProfileOrdersView = () => {
  return (
    <>
      <div className="h-32 overflow-hidden bg-primary"></div>

      <div className="flex ml-40">
        <span className="text-4xl mr-8 mt-2">
          <BsArrowReturnLeft />
        </span>
        <div className="w-36 h-36 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
      </div>

      <h2 className="text-center">Mes commandes</h2>

      <div className="flex flex-col items-center mb-24">
        {orders.map((order) => (
          <CardOrderProfile key={order.id} order={order} />
        ))}
      </div>

      <h2 className="text-center">Mes retours</h2>
      <div className="flex flex-col items-center mb-24">
        {ordersReturns.map((orderReturn) => (
          <CardOrderProfile key={orderReturn.id} order={orderReturn} />
        ))}
      </div>

    </>
  );
};

export default ProfileOrdersView;
