import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../redux-store/cartSlice";
import EmptyBasket from "../components/EmptyBasket";
import AsideCart from "../components/AsideCart";
import CardCart from "../components/cards/CardCart";

const CartView = ({ cart, removeItem }) => {
  return (
    <main className="flex justify-evenly mb-24">
      {cart.length === 0 ? (
        <EmptyBasket />
      ) : (
        <>
          <section className="w-1/3">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6">
                  {cart.map((product) => (
                    <CardCart
                      key={product.id}
                      product={product}
                      removeFromCart={() => removeItem(product.id)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <AsideCart />
        </>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (productId) => dispatch(removeItem(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
