import React, { useState, useEffect } from "react";
import CardOrderProfile from "../components/cards/CardOrderProfile";
import apiBackEnd from "../api/backend/api.Backend";
import { URL_BACK_REGISTRATION, URL_BACK_END_ORDER_DETAILS, URL_BACK_END_ORDER_STATUSES } from "../constants/urls/urlBackEnd";
import ProfileHeader from "../components/ProfileHeader";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux-store/authenticationSlice";

const ProfileOrdersView = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [orders, setOrders] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await apiBackEnd.get(URL_BACK_REGISTRATION);
        const userData = response.data;

        if (user && user.username) {
          const userInfo = userData.find(
            (userInfo) => userInfo.email === user.username
          );
          setUserInfo(userInfo);
          fetchUserOrders(userInfo.id);
        }
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des informations de l'utilisateur :",
          error
        );
      }
    };

    fetchUserInfo();
  }, []);

  const fetchUserOrders = async (id) => {
    try {
      const response = await apiBackEnd.get(`/users/${id}/orders`);
      const userOrders = response.data;
      setOrders(userOrders);
    } catch (error) {
      console.log("Erreur lors de la récupération des commandes de l'utilisateur :", error);
    }
  };

  // En cours developpement
  // const fetchOrderDetails = async (orderDetailUrl) => {
  //   try {
  //     const response = await apiBackEnd.get(URL_BACK_END_ORDER_DETAILS);
  //     const orderDetail = response.data;
  //     console.log("Détails de la commande :", orderDetail);
  //   } catch (error) {
  //     console.log("Erreur lors de la récupération des détails de la commande :", error);
  //   }
  // };
  

  return (
    <>
      <ProfileHeader userInfo={userInfo} />

      <h2 className="text-center">Mes commandes</h2>

      <div className="flex flex-col items-center mb-24">
        {orders.map((order) => (
          <CardOrderProfile key={order.id} order={order} />
        ))}
      </div>
    </>
  );
};

export default ProfileOrdersView;


{/* <h2 className="text-center">Mes retours</h2>
<div className="flex flex-col items-center mb-24">
  {ordersReturns.map((orderReturn) => (
    <CardOrderProfile key={orderReturn.id} order={orderReturn} />
  ))}
</div> */}