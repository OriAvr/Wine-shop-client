import React from "react";
import "./productComponent.css";
import AddFavorite from "./AddFavorite";
import AddToCartBtn from "./AddToCart";

import { Grid } from "@mui/material";
import Image from "mui-image";

const ProductComponent = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <Image src={props.src} alt="Product" className="img-responsive" />
        </div>
        <div className="wsk-cp-text">
          <div className="title-product">
            <div className="category">
              <span>{props.year}</span>
            </div>
            <h3>{props.name}</h3>
          </div>
          <div className="description-prod">
            <p>{props.description}</p>
          </div>

          <div className="card-footer">
            <div className="wcf-left">
              <span className="price">{props.price}</span>
            </div>
            <div className="wcf-right">
              <AddFavorite sku={props.sku}></AddFavorite>
            </div>
            <div className="wcf-right">
              <AddToCartBtn
                sku={props.sku}
                src={props.src}
                name={props.name}
                price={props.price}
              ></AddToCartBtn>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductComponent;
