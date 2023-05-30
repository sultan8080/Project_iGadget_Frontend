import React, { useContext } from "react";
import CardSearch from "../components/cards/CardSearch";
import { SearchContext } from "../App";

const SearchView = () => {
  const searchContext = useContext(SearchContext);
  const { searchResults } = searchContext;

  return (
    <div className="flex flex-col items-center">
      {searchResults && searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <>
          <section className="flex flex-col">
            {searchResults &&
              searchResults.map((result) => (
                <CardSearch
                  key={result.id}
                  title={result.title}
                  description={result.description}
                  img={result.img}
                />
              ))}
          </section>
          <button className="btn btn-third my-12">Afficher plus</button>
        </>
      )}
    </div>
  );
};

export default SearchView;
