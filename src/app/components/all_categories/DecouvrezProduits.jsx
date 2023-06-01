import React from "react";

const DecouvrezImages = [
  {
    id: 1,
    img: "src/app/assets/produits/category_photo/EchoSphere_noir_2.png",
  },
  {
    id: 2,
    img: "src/app/assets/produits/category_photo/iPadPro_gris_2.png",
  },
  {
    id: 3,
    img: "src/app/assets/produits/category_photo/Watch_gris_2.png",
  },
  {
    id: 4,
    img: "src/app/assets/produits/category_photo//MacBookAir_argent_2.png",
  },

  {
    id: 5,
    img: "src/app/assets/produits/category_photo/NovaSE_noir_2.png",
  },
];

function DecouvrezProduits() {
  return (
    <div class="flex lg:gap-10 gap-4 justify-center items-end mb-8 sm:mb-13 lg:mb-20">
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src={DecouvrezImages[0].img}
          alt="EchoSphere_noir_2"
        />
      </div>
      <div className="w-2/12 h-auto">
        <img
          className="object-contain"
          src={DecouvrezImages[1].img}
          alt="iPadPro"
        />
      </div>
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src={DecouvrezImages[2].img}
          alt="WatchGris"
        />
      </div>
      <div className="w-3/12 h-auto">
        <img
          className="object-contain"
          src={DecouvrezImages[3].img}
          alt="MacBookAir"
        />
      </div>
      <div className="w-1/12 h-auto">
        <img
          className="object-contain"
          src={DecouvrezImages[4].img}
          alt="NovaSE"
        />
      </div>
    </div>
  );
}

export default DecouvrezProduits;
