import React from "react";

const productData = {
    title: "PixelWave 14",
    description:
      "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
    img: "src/app/assets/test/PixelWave_blanc.png"
  };

const SearchView = () => {
  return (
    <section className="flex flex-col">

      <div className="border flex h-60 items-center mt-8">
        <img src={productData.img} className="w-64" />

        <div className="px-16 w-2/3">
          <span className="text-3xl font-bold pb-6">{productData.title}</span>
          <p>
          {productData.description}
          </p>
        </div>

        <div className="flex flex-col">
          <button
            type="button"
            class="text-white bg-[#87D9D4] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Ajouter au panier
          </button>
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#87D9D4] focus:outline-none bg-white rounded-full border border-[#87D9D4] focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Voir le produit
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchView;
