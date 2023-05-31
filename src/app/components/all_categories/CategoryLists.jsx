import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryDesc = [
  {
    Title: "Les Téléphones",
    img: "src/app/assets/produits/category_photo/block-1.png",
    description:
      "Des modèles abordables aux smartphones haut de gamme, dotés d'un design élégant et moderne, de fonctionnalités avancées pour une utilisation quotidienne, et d'une autonomie de batterie longue durée. ",
  },
  {
    Title: "Les Ordinateurs",
    img: "src/app/assets/produits/category_photo/block-2.png",
    description:
      "Que vous soyez un utilisateur professionnel ou un joueur passionné, nos ordinateurs offrent une expérience utilisateur exceptionnelle avec des processeurs rapides, une mémoire vive élevée et des cartes graphiques puissantes.",
  },
  {
    Title: "Les Tablettes",
    img: "src/app/assets/produits/category_photo/block-3.png",
    description:
      "Des tailles d'écran variées, des performances rapides, une grande autonomie de batterie et des fonctionnalités intuitives. Parfaites pour la navigation web, la lecture de livres électroniques, le visionnage de vidéos et bien plus encore.",
  },
  {
    Title: "Les Montres",
    img: "src/app/assets/produits/category_photo/block-4.png",
    description:
      "Des fonctionnalités telles que le suivi de la condition physique, la surveillance du sommeil et la connectivité Bluetooth, nos montres sont conçues pour vous aider à rester connecté(e) et à atteindre vos objectifs de santé et de fitness.",
  },
  {
    Title: "Audio",
    img: "src/app/assets/produits/category_photo/block-5.png",
    description:
      "Découvrez la liberté de mouvement et profitez d'un son de qualité supérieure sans les contraintes des câbles. Avec notre technologie avancée, vous pouvez connecter facilement votre téléphone, tablette ou ordinateur pour une expérience audio exceptionnelle. Ne laissez rien vous arrêter dans votre musique ou vos appels.",
  },
];

function CategoryLists() {
  return (
    <div>
      <div className="grid grid-cols-12  text-white  bg-primary-light">
        <div className="lg:col-span-8 md:col-span-7 col-span-12 lg:pl-10 xl:pl-20 sm:pl-5 pl-3 lg:pr-10 xl:pr-20 sm:pr-5 pr-3">
          <div className="flex flex-col my-10 lg:pl-10 xl:pl-20 sm:pl-5">
            <div className="flex items-end justify-between ">
              <div className="w-1/2 lg:text-6xl text-5xl font-bold mt-10 ">
                {CategoryDesc[0].Title}
              </div>
              <hr className="w-3/4 h-1 bg-gray-100 rounded" />
            </div>
            <div className="lg:text-4xl text-3xl  my-8 text-justify leading-normal mt-10">
              {CategoryDesc[0].description}
            </div>

            <div className="lg:mt-20 mt-10">
              <Link to="/telephone">
                <span className="btn btn-secondary text-3xl rounded-full sm:w-3/4 2xl:w-1/4  xl:w-2/4  w-full">
                  Voir les produits
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-5 col-span-12 lg:pr-10 xl:pr-20 sm:pr-5 pr-3 flex justify-end">
          <img
            className="object-contain "
            src={CategoryDesc[0].img}
            alt="photo téléphone"
            width={500}
          />
        </div>
      </div>

      <div className="grid grid-cols-12  text-white  bg-primary-light">
        <div className="lg:col-span-8 md:col-span-7 col-span-12 lg:pl-10 xl:pl-20 sm:pl-5 pl-3 lg:pr-10 xl:pr-20 sm:pr-5 pr-3">
          <div className="flex flex-col my-10 lg:pl-10 xl:pl-20 sm:pl-5">
            <div className="flex items-end justify-between ">
              <div className="w-1/2 lg:text-6xl text-5xl font-bold mt-10 ">
                {CategoryDesc[0].Title}
              </div>
              <hr className="w-3/4 h-1 bg-gray-100 rounded" />
            </div>
            <div className="lg:text-4xl text-3xl  my-8 text-justify leading-normal mt-10">
              {CategoryDesc[0].description}
            </div>

            <div className="lg:mt-20 mt-10">
              <Link to="/telephone">
                <span className="btn btn-secondary text-3xl rounded-full sm:w-3/4 2xl:w-1/4  xl:w-2/4  w-full">
                  Voir les produits
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-5 col-span-12 lg:pr-10 xl:pr-20 sm:pr-5 pr-3 flex justify-end">
          <img
            className="object-contain "
            src={CategoryDesc[0].img}
            alt="photo téléphone"
            width={500}
          />
        </div>
      </div>
      
    </div>
  );
}

export default CategoryLists;
