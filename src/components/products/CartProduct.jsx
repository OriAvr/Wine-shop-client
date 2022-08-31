import * as React from "react";
import Container from "@mui/material/Container";
import "./cartProduct.css";

const CartProduct = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="cartProduct">
        <img src={props.src} alt="product" className="productImg" />
        <div className="productName">{props.name}</div>
        <div className="productPrice">{props.price}</div>
        <div className="productQty">{props.qty}</div>
      </div>
    </div>
  );
};

export default CartProduct;
