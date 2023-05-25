import React, { useContext } from "react";
import CardSearch from "../components/cards/CardSearch";
import { SearchContext } from "../App";

// const productData = [
//   {
//     id: 1,
//     title: "PixelWave 14",
//     description:
//       "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
//     img: "src/app/assets/test/PixelWave_blanc.png",
//   },
//   {
//     id: 2,
//     title: "PixelWave 14",
//     description:
//       "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
//     img: "src/app/assets/test/PixelWave_blanc.png",
//   },
//   {
//     id: 3,
//     title: "PixelWave 14",
//     description:
//       "Le PixelWave 14 avec Dynamic Island. SOS d’urgence par satellite. Détection des accidents. Appareil photo 48 Mpx innovant. Et puce A16 Bionic.",
//     img: "src/app/assets/test/PixelWave_blanc.png",
//   },
// ];

const SearchView = () => {
  const searchContext = useContext(SearchContext);

  return (
    <div className="flex flex-col items-center">
      {searchContext.searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <>
          <section className="flex flex-col">
            {searchContext.searchResults.map((result) => (
              <CardSearch
                key={result.id}
                title={result.title}
                description={result.description}
                img={result.img}
              />
            ))}
          </section>
          <button className="btn btn-third my-12">Affiche plus</button>
        </>
      )}
    </div>
  );
};

export default SearchView;
