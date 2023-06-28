import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectToken,
  selectUser,
} from "../../../redux-store/authenticationSlice";
import axios from "axios";
import userPhoto from "../../../assets/avatar/Admin-Photo-1.jpg";

function AdminProfile() {
  const user = useSelector(selectUser);
  const [userData, setUserData] = useState({});
  const token = useSelector(selectToken);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [user.userId, token]);

  return (
    <>
      <div className="flex flex-row-reverse justify-around items-center mx-20 ">
        <div className="w-40 h-auto text-center mt-25 border-4 border-white shadow-lg">
          <img
            className="object-cover object-center "
            src={"../src/app/assets/avatar/" + userData.user_photo}
            alt="Photo ADMIN"
          />
        </div>
        <div>
          <h3 className="text-center">
            <span className="text-bold"> {userData.lastname} </span>{" "}
            {userData.firstname}{" "}
          </h3>
          <small> {userData.roles} </small>
        </div>
      </div>

      <div className="flex flex-col items-center mb-24">
        <section className="flex items-end justify-between border p-6  w-2/3 mt-6 shadow-md">
          <div className="flex flex-col">
            <h5 className="mb-6">Mes Coordonnées</h5>
            <p className="flex flex-col">
              <span> Téléphone : {userData.phone}</span>
              <span>Email : {userData.email}</span>
            </p>
          </div>
          <button className="btn btn-primary">Metttre à jour</button>
        </section>

        <section className="flex items-end justify-between border p-6  w-2/3 mt-6 shadow-md">
          <div className="flex flex-col">
            <h5 className="mb-6">Mon Carnet D'adresses</h5>
            <div className="flex flex-col">
              <span>Adresse de Livraison</span>
              <span> Adresse : {userData.address}</span>
              <span>Code Postale : {userData.codepostal}</span>
              <span>Ville : {userData.city}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col">
                <span>Adresse de Livraison</span>
                <span> Adresse : {userData.address}</span>
                <span>Code Postale : {userData.codepostal}</span>
                <span>Ville : {userData.city}</span>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Metttre à jour</button>
        </section>

        <section className="flex items-end justify-between border p-6  w-2/3 mt-6 shadow-md">
          <div className="flex flex-col">
            <h5 className="mb-6">Confidentialité</h5>
            <span>Mot de passe</span>
            <span>*******************</span>
          </div>
          <button className="btn btn-primary">Metttre à jour</button>
        </section>
      </div>
    </>
  );
}

export default AdminProfile;
