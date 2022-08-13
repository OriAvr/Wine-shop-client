import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialCartState = {
  cartProducts: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      toast.success("Added to cart");
      // console.log(product.sku);
      // Check if Item is already in cart
      const inCart = state.cartProducts.find((item) =>
        item.product.sku === product.sku ? true : false
      );

      return {
        ...state,
        cartProducts: inCart
          ? state.cartProducts.map((item) =>
              item.product.sku === product.sku
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cartProducts, { product, qty: 1 }],
        cartTotal: state.cartTotal + product.price,
      };
    },
    removeFromCart(state, action) {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.sku !== action.payload.sku
        ),
      };
    },
    adjustQuantity(state, action) {
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) =>
          item.sku === action.payload.sku
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
