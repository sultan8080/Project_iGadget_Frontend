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
  // const [orders, setOrders] = useState([]);

  // const ordersData = () => {
  //   apiBackEnd
  //     .get(URL_BACK_USERS_ORDERS)
  //     .then((response) => {
  //       const data = response.data;
  //       console.log("====================================");
  //       console.log("data orders : ", data);
  //       console.log("====================================");
  //       setOrders(data);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur order profile page :", error);
  //     });
  // };

  // useEffect(() => {
  //   const userId = 10; // Remplacez par l'id de l'utilisateur connecté
  //   ordersData(userId);
  // }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
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

  return (
    <>
      {/* <a href="/profil" className="text-4xl mr-8 mt-2">
          <BsArrowReturnLeft />
        </a> */}
      <ProfileHeader userInfo={userInfo} />

      <h2 className="text-center">Mes commandes</h2>

      {/* <div className="flex flex-col items-center mb-24">
        {orders.map((order) => (
          <CardOrderProfile key={order.id} order={order} />
        ))}
      </div> */}

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
