import React from "react";

function DecouvrezProduits(props) {
  return (
    <div class="flex lg:gap-10 gap-4 justify-center items-end mb-8 sm:mb-13 lg:mb-20">
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src="./src/app/assets/produits/category_photo/EchoSphere_noir_2.png"
          alt=""
        />
      </div>
      <div className="w-2/12 h-auto">
        <img
          className="object-contain"
          src="./src/app/assets/produits/category_photo/iPadPro_gris_2.png"
          alt=""
        />
      </div>
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src="./src/app/assets/produits/category_photo/Watch_gris_2.png"
          alt=""
        />
      </div>
      <div className="w-3/12 h-auto">
        <img
          className="object-contain"
          src="./src/app/assets/produits/category_photo//MacBookAir_argent_2.png"
          alt=""
        />
      </div>
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src="./src/app/assets/produits/category_photo/NovaSE_noir_2.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default DecouvrezProduits;
