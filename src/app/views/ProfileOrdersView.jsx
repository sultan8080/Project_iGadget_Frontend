import React from "react";



const ProfileOrdersView = () => {
  return (
    <>
      <div class="h-32 overflow-hidden bg-primary"></div>
      <div class="ml-40 w-36 h-36 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
        <img
          class="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>

      <h2 className="text-center">Mes commandes</h2>

      <div className="flex flex-col items-center mb-24">
        <section className="flex items-end justify-between border p-6  w-2/3 mt-6">
          <div className="flex flex-col">
            <span className="font-bold ">En cours</span>
            <span className="text-gray-500">2 article(s)</span>
          </div>
          <div className="flex flex-col text-gray-500">
            <span>22-03-2023</span>
            <span>1 228,00 €</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileOrdersView;
