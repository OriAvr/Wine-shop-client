import React from "react";
import "./productStyle.css";
import AddFavorite from "./AddFavorite";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";
import Image from "mui-image";

const ProductComponent = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <Image src={props.src} alt="Product" className="img-responsive" />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <span>{props.year}</span>
          </div>
          <div className="title-product">
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
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductComponent;
