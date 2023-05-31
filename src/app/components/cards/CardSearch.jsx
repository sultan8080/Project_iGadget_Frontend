import React, { useEffect, useState } from "react";
import axios from "axios";

const CardSearch = (result) => {
  const [resultImage, setResultImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageId = result.img[0].split("/").pop(); // Récupérer l'ID de l'image depuis l'URL
        const response = await axios.get(`http://localhost:8000/api/product_images/${imageId}`, {
          responseType: "blob",
        });
        const imgUrl = URL.createObjectURL(response.data);
        setResultImage(imgUrl);
      } catch (error) {
        console.log("Error loading image:", error);
      }
    };

    loadImage();
  }, [result.img]);
  
  return (
    <div className="border flex h-60 items-center justify-around mt-8">
      {resultImage && <img src={resultImage} className="w-64" />}

      <div className="px-24 w-2/3">
        <span className="text-3xl font-bold pb-6">{result.title}</span>
        <p>{result.description}</p>
      </div>

      <div className="flex flex-col px-10">
        <button
          type="button"
          className="text-white bg-[#87D9D4] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 whitespace-nowrap"
        >
          Ajouter au panier
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#87D9D4] focus:outline-none bg-white rounded-full border border-[#87D9D4] focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap"
        >
          Voir le produit
        </button>
      </div>
    </div>
  );
};

export default CardSearch;
