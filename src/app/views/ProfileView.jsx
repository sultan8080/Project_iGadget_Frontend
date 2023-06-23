import React, { useState, useEffect } from "react";
import { selectIsLogged, signOut } from "../redux-store/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
import apiBackEnd from "../api/backend/api.Backend";
import { URL_BACK_REGISTRATION } from "../constants/urls/urlBackEnd";

const ProfileView = () => {
  const [usersProfile, setUsersProfile] = useState([]);
  const { id } = useParams();

  const carouselData = () => {
    apiBackEnd
      .get(URL_BACK_REGISTRATION)
      .then((response) => {
        const data = response.data;
        console.log('====================================');
        console.log('profile data',data);
        console.log('====================================');
        setUsersProfile(data);
      })
      .catch((error) => {
        console.error("Error user profile page :", error);
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>

        <div className="flex justify-around">
          <h3 className="-mt-12 ml-80 mb-4">Bonjour { usersProfile.firstname }</h3>
          <button
            type="button"
            onClick={handleLogOut}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full border btn-red"
          >
            Déconnecter
          </button>
        </div>

        <div className="flex flex-col items-center mb-24">
          <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
            <div className="flex flex-col">
              <h5 className="mb-6">Mes Coordonnées</h5>
              
                {/* 
                <span className="font-bold">Prénom</span>
                <span>{data.value}</span>
                <span className="font-bold">Nom</span>
                <span>{data.value}</span>
                <span className="font-bold">Email</span>
                <span>{data.value}</span>
                <span className="font-bold">Téléphone</span>
                <span>{data.value}</span> 
                */}
              
              
            </div>
            <button className="btn btn-secondary">Metttre à jour</button>
          </section>

          <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
            <div className="flex flex-col">
              <h5 className="mb-6">Mon Carnet D'adresses</h5>
              <div className="flex">
                <p className="flex flex-col">
                  <span>Adresse de livraison</span>
                  <span>26 rue d'acheville</span>
                  <span>62 000 Rouvroy</span>
                  <span>France</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="flex flex-col">
                  <span>Adresse de facturation</span>
                  <span>26 rue d'acheville</span>
                  <span>62 000 Rouvroy</span>
                  <span>France</span>
                </p>
              </div>
            </div>
            <button className="btn btn-secondary">Metttre à jour</button>
          </section>

          <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
            <div className="flex flex-col">
              <h5 className="mb-6">Confidentialité</h5>
              <span>Mot de passe</span>
              <span>*******************</span>
            </div>
            <button className="btn btn-secondary">Metttre à jour</button>
          </section>

          <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
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
          </section>
        </div>
      </>
    );
  }
;

export default ProfileView;
