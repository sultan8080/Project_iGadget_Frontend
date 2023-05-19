import React from 'react'

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
      <h1 className=''>Mes commandes</h1>

      <div className="flex flex-col items-center mb-24">

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
          <button className="btn btn-primary"><a href="/profile-orders">Accéder aux commandes</a></button>
        </section>

      </div>

    </>
  )
}

export default ProfileOrdersView