import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/products/CartProduct";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.cartProducts);
  const total = useSelector((state) => state.cart.cartTotal);

  const renderCart = (item) => {
    if (item) {
      return (
        <CartProduct
          key={item.product.sku}
          src={item.product.src}
          name={item.product.name}
          price={item.product.price}
          qty={item.qty}
        />
      );
    }
  };

  return (
    <div>
      {cart.map(renderCart)}
      <br />
      <br />
      <br />
      <br />
      <h1>Total : {total}</h1>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ShoppingCartPage;
