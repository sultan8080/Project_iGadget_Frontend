import React, { useContext } from "react";
import CardSearch from "../components/cards/CardSearch";
import { SearchContext } from "../App";

const SearchView = () => {
  const searchContext = useContext(SearchContext);
  const { searchResults } = searchContext;

  return (
    <div className="flex flex-col items-center">
      {searchResults && searchResults.length > 0 ? (
        <>
          <section className="flex flex-col">
            {searchResults.map((result) => (
              <>
                <CardSearch
                  key={result.id}
                  result={{
                    name: result.name,
                    description: result.description,
                    productimages: result.productimages[0]
                      ? result.productimages[0].image_name
                      : "toto",
                  }}
                />
                <div>
                  {result.productimages[0]
                    ? result.productimages[0].image_name
                    : "toto"}
                </div>
              </>
            ))}
          </section>
          <button
            className="btn btn-third my-12"
            onClick={() => {
              console.log(
                "searchResults : ",
                searchResults[0].productimages[0].image_name
              );
            }}
          >
            Afficher plus
          </button>
        </>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default SearchView;
