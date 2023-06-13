import React from "react";
import CardBestSellers from "../cards/CardBestSellers";

const products = [
  {
    title: "PixelWave14",
    image: "./src/app/assets/produits/téléphones/AuroraMax_blanc.png",
    description:
      "Découvrez le PixelWave 14 ! Avec son design élégant et ses fonctionnalités avancées, il vous permettra de rester connecté en toute simplicité. Profitez d'un écran de qualité supérieure, d'une batterie durable et d'un appareil photo haute résolution pour capturer tous les moments importants de votre vie. Découvrez une nouvelle manière de communiquer !",
  },
  {
    title: "Nexus Watch",
    image: "./src/app/assets/produits/montres/Watch_blanc.png",
    description:
      "Découvrez la Nexus Watch pour les personnes modernes et actives ! Grâce à son design épuré, vous pouvez suivre votre activité physique, recevoir des notifications de vos applications préférées et rester connecté avec vos contacts en un seul coup d'œil. Ne manquez jamais un appel important ou une réunion. Profitez dès maintenant des avantages de la technologie portable.",
  },
  {
    title: "SoundScape",
    image: "./src/app/assets/produits/audios/SoundScape_blanc.png",
    description:
      "Découvrez notre dernier casque sans fil SoundScape ! Profitez d un son cristallin et d une liberté de mouvement totale grâce à sa technologie Bluetooth. Écoutez votre musique préférée ou prenez des appels en toute simplicité. Avec son design moderne et sa batterie longue durée, ce casque est le compagnon parfait pour vos déplacements. Commandez le vôtre dès maintenant !",
  },
];

const Bestsellers = () => {

  return (
    <section className="bestsallers max-w-[1800px] mx-auto mt-12">
      <div>
        <h1 className="text-center uppercase font-bold mt-2">
          Les <span className="text-third"> Bestsellers </span>
        </h1>
        <h4 className="text-center mt-2 mb-16">Nos produits ont du succès !</h4>
      </div>

      {products.map((product, index) => (
        <div className="grid grid-cols-2 items-center" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="image bg-[url('./src/app/assets/produits/autre/rectangle_orange_gauche.svg')] bg-no-repeat flex justify-center bg-[length:31%] bg-[left_calc(40%)_top_calc(42px)]">
                <img src={product.image} alt={product.title} width={600} />
              </div>

              <CardBestSellers product={product}/>
            </>
          ) : (
            <>
              <CardBestSellers product={product}/>
              
              <div className="image bg-[url('./src/app/assets/produits/autre/rectangle_orange_droite.svg')] bg-no-repeat flex justify-center bg-[length:31%] bg-[left_calc(61%)_top_calc(0px)]">
                <img src={product.image} alt={product.title} width={450} />
              </div>
            </>
          )}
        </div>
      ))}

      <div className="button flex justify-center">
        <button
          type="button"
          className="text-white bg-secondary focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-16"
        >
          Voir tous nos produits
        </button>
      </div>
    </section>
  );
};

export default Bestsellers;
