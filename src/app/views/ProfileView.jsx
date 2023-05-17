import React from "react";

const ProfileView = () => {
  const userData = [
    { label: "Prénom", value: "Juline" },
    { label: "Nom", value: "nomDeFamille" },
    { label: "Email", value: "juline@gmail.com" },
    { label: "Téléphone", value: "06 54 92 49 35" },
  ];

  return (
    <>
      <div class="h-32 overflow-hidden bg-primary"></div>
      <div class="ml-14 w-36 h-36 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
        <img
          class="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>

      <h3 className="-mt-12 ml-56 mb-4">Bonjour Juline !</h3>

      <div className="flex flex-col items-center mb-24">
        <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <h5 className="mb-6">Mes Coordonnées</h5>
            {userData.map((data, index) => (
              <React.Fragment key={index}>
                <span className="font-bold">{data.label}</span>
                <span>{data.value}</span>
              </React.Fragment>
            ))}
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
            {userData.map((data, index) => (
              <React.Fragment key={index}>
                <span className="font-bold">{data.label}</span>
                <span>{data.value}</span>
              </React.Fragment>
            ))}
          </div>
          <button className="btn btn-primary">Accéder aux commandes</button>
        </section>

      </div>
    </>
  );
};

export default ProfileView;
