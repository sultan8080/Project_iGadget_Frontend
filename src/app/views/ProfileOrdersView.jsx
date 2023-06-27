import React, { useState, useEffect } from "react";
import CardOrderProfile from "../components/cards/CardOrderProfile";
import { BsArrowReturnLeft } from "react-icons/bs";
import { signOut, selectUser } from "../redux-store/authenticationSlice";
import apiBackEnd from "../api/backend/api.Backend";
import { URL_BACK_REGISTRATION } from "../constants/urls/urlBackEnd";
import ProfileHeader from "../components/ProfileHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProfileOrdersView = () => {
  const [userInfo, setUserInfo] = useState(null);
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await apiBackEnd.get(URL_BACK_REGISTRATION);
        const userData = response.data;

        if (user && user.username) {
          const userInfo = userData.find(
            (userInfo) => userInfo.email === user.username
          );
          console.log(userInfo)
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
      const response = await apiBackEnd.get(`/users/${id}/orders`); // Utilisez apiBackEnd au lieu de axios.get
      const userOrders = response.data;
      setOrders(userOrders);
    } catch (error) {
      console.log("Erreur lors de la récupération des commandes de l'utilisateur :", error);
    }
  };
  

  return (
    <>
      <ProfileHeader userInfo={userInfo} />

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
