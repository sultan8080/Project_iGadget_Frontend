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

      <h3>Bonjour Juline !</h3>

      <div className="flex justify-evenly">
        <section className="flex items-end w-2/3">
          <div className="flex flex-col">
            <h5>Mes Coordonnées</h5>
            {userData.map((data, index) => (
              <React.Fragment key={index}>
                <span className="font-bold">{data.label}</span>
                <span>{data.value}</span>
              </React.Fragment>
            ))}
          </div>
          <button className="btn btn-secondary">Metttre à jour</button>
        </section>
      </div>
    </>
  );
};

export default ProfileView;
