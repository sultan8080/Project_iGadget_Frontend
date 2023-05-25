import React from "react";
import CardSearch from "../components/cards/CardSearch";

const productData = [
  {
    id: 1,
    title: "PixelWave 14",
    description:
      "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
    img: "src/app/assets/test/PixelWave_blanc.png",
  },
  {
    id: 2,
    title: "PixelWave 14",
    description:
      "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
    img: "src/app/assets/test/PixelWave_blanc.png",
  },
  {
    id: 3,
    title: "PixelWave 14",
    description:
      "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
    img: "src/app/assets/test/PixelWave_blanc.png",
  },
];

const SearchView = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col">
        {productData.map((product) => (
          <CardSearch 
            key={product.id}
            title={product.title}
            description={product.description}
            img={product.img}
          />
        ))}
      </section>
      <button className="btn btn-third my-12">Affiche plus</button>
    </div>
  );
};

export default SearchView;
