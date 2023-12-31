import React, { useState, useContext } from "react";
import axios from 'axios';
import apiBackEnd from "../../api/backend/api.Backend";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../App";
import { URL_BACK_PRODUCTS, URL_BACK_PRODUCTIMAGES } from "../../constants/urls/urlBackEnd";


const SearchInput = () => {
  const searchContext = useContext(SearchContext);
  const { searchResults, setSearchResults } = searchContext;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    apiBackEnd
      .get(URL_BACK_PRODUCTS + `?name=${searchTerm}`)
      .then((response) => {
        const data = response.data;
  
        if (data) {
          setSearchResults(data);
  
          if (data.length > 0 && data[0].hasOwnProperty('productimages') && data[0].productimages.length > 0) {
            const product_image = data[0].productimages[0].image_name;
          }
        }
  
        navigate("/search");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-5">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full pl-10 p-2.5"
          placeholder="Recherche"
          value={searchTerm}
          onChange={handleSearchInputChange}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
