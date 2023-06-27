import React, { useState, useEffect } from "react";
import { signOut, selectUser } from "../redux-store/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
import apiBackEnd from "../api/backend/api.Backend";
import { URL_BACK_REGISTRATION } from "../constants/urls/urlBackEnd";

const ProfileView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState(null);

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

  const handleLogOut = () => {
    dispatch(signOut());
    navigate(URL_HOME);
  };

  return (
    <>
      <div className="h-32 overflow-hidden bg-primary"></div>
      <div className="ml-40 w-36 h-36 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={
            userInfo && userInfo.user_photo
              ? userInfo.user_photo
              : "https://spring.uli.org/wp-content/themes/uli-conference-3/img/no-speaker-image.png"
          }
          alt={ userInfo && userInfo.user_photo }
        />
      </div>

      <div className="flex justify-between mx-80">
        <h3>Bonjour {userInfo && userInfo.firstname}</h3>

        <button
          type="button"
          onClick={handleLogOut}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full border btn-red"
        >
          Déconnecter
        </button>
      </div>

      <div className="flex flex-col items-center mb-24">
        <div className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <h5 className="mb-6">Mes Coordonnées</h5>
            <span className="font-bold">Prénom</span>
            <span>{userInfo && userInfo.firstname}</span>
            <span className="font-bold">Nom</span>
            <span>{userInfo && userInfo.lastname}</span>
            <span className="font-bold">Email</span>
            <span>{userInfo && userInfo.email}</span>
            <span className="font-bold">Téléphone</span>
            <span>{userInfo && userInfo.phone}</span>
          </div>
          <button className="btn btn-secondary">Metttre à jour</button>
        </div>

        <div className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <h5 className="mb-6">Mon Carnet D'adresses</h5>
            <div className="flex">
              <p className="flex flex-col">
                <span>Adresse de livraison</span>
                <span>{userInfo && userInfo.address}</span>
                <span>{userInfo && userInfo.codepostal}</span>
                <span>{userInfo && userInfo.city}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="flex flex-col">
                <span>Adresse de facturation</span>
                <span>{userInfo && userInfo.address}</span>
                <span>{userInfo && userInfo.codepostal}</span>
                <span>{userInfo && userInfo.city}</span>
              </p>
            </div>
          </div>
          <button className="btn btn-secondary">Metttre à jour</button>
        </div>

        <div className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <h5 className="mb-6">Confidentialité</h5>
            <span>Mot de passe</span>
            <span>*******************</span>
          </div>
          <button className="btn btn-secondary">Metttre à jour</button>
        </div>

        <div className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <h5 className="mb-6">Mes Commandes</h5>
            <span className="font-bold ">En cours</span>
            <span className="text-gray-500">2 articles</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">22-03-2023</span>
            <span className="text-gray-500">1 228,00 €</span>
          </div>
          <button className="btn btn-primary">
            <a href="/profile-orders">Accéder aux commandes</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
