import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { cartActions } from "../../store/ShoppingCart/shoppingCart";
import { useDispatch } from "react-redux";

const AddToCartBtn = (props) => {
  const product = { ...props };
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(cartActions.addToCart(product));
  };

  return (
    <a href="#" className="buy-btn" onClick={handleAddToCart}>
      <AddShoppingCartIcon />
    </a>
  );
};

// export default AddToCartBtn;
export default AddToCartBtn;
