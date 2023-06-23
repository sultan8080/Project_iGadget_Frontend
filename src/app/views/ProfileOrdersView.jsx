import React, { useState, useEffect } from "react";
import CardOrderProfile from "../components/cards/CardOrderProfile";
import { BsArrowReturnLeft } from "react-icons/bs";
import apiBackEnd from "../api/backend/api.Backend";
import { URL_BACK_USERS_ORDERS } from "../constants/urls/urlBackEnd";

const ProfileOrdersView = () => {
  const [orders, setOrders] = useState([]);
  
  const ordersData = () => {
    apiBackEnd
      .get(URL_BACK_USERS_ORDERS)
      .then((response) => {
        const data = response.data;
        setOrders(data);
      })
      .catch((error) => {
        console.error("Erreur order profile page :", error);
      });
  };

  useEffect(() => {
    ordersData();
  }, []);

  return (
    <>
      <div className="h-32 overflow-hidden bg-primary"></div>

      <div className="flex ml-40">
        <a href="/profile" className="text-4xl mr-8 mt-2">
          <BsArrowReturnLeft />
        </a>
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

      {/* <h2 className="text-center">Mes retours</h2>
      <div className="flex flex-col items-center mb-24">
        {ordersReturns.map((orderReturn) => (
          <CardOrderProfile key={orderReturn.id} order={orderReturn} />
        ))}
      </div> */}

    </>
  );
};

export default ProfileOrdersView;
