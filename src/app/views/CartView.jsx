import React from "react";
import EmptyBasket from "../components/EmptyBasket";
import AsideCart from "../components/AsideCart";
import CardCart from '../components/cards/CardBasket';


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
];

const CartView = () => {
  return (
    <main className="flex justify-evenly mb-24">
      {/* <EmptyBasket /> */}

      <section className="w-1/3">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6">
              {products.map((product) => (
                <CardCart key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AsideCart />
    </main>
  );
};

export default CartView;
