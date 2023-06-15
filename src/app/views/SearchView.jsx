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
              <CardSearch
                key={result.id}
                result={{
                  name: result.name,
                  description: result.description,
                  productimages: result.productimages.image_name,
                }}
              />
            ))}
          </section>
          <button className="btn btn-third my-12">Afficher plus</button>
        </>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default SearchView;
