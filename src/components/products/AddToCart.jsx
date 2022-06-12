import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCart = () => {
  const handleAddToCart = (event) => {
    event.preventDefault();
  };

  return (
    <a href="#" className="buy-btn" onClick={handleAddToCart}>
      <AddShoppingCartIcon />
    </a>
  );
};

export default AddToCart;
