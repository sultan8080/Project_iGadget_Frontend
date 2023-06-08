import React from "react";
import DecouvrezProduits from "../components/all_categories/DecouvrezProduits";
import CategoryLists from "../components/all_categories/CategoryLists";

export default function AllCategoriesView() {
  return (
    <div className="flex flex-col ">
      {/* space-y-1 sm:space-y-3 md:space-y-4 lg:space-y-10 */}

      <div className="lg:text-6xl sm:text-4xl text-3xl text-center font-bold mt-5 mb-8 sm:mb-13 lg:mb-20">
        Découvrez les produits <br />
        qui <span className="text-secondary">VOUS</span> correspondent
      </div>
      <DecouvrezProduits />
      <CategoryLists />
    </div>
  );
}
