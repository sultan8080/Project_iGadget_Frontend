import React from "react";
import EmptyBasket from "../components/EmptyBasket";
import AsideBasket from "../components/AsideBasket";
import CardBasket from "../components/cards/CardBasket";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    ref: "1077446003",
    price: "$90.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    ref: "1077446094",
    price: "$32.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const BasketView = () => {
  return (
    <main className="flex justify-evenly mb-24">
      {/* <EmptyBasket /> */}

      <section className="w-1/3">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6">
              {products.map((product) => (
                <CardBasket key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AsideBasket />
    </main>
  );
};

export default BasketView;
