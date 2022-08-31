import { Typography, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import "./homepage.css";

import ProductComponent from "../../components/products/ProductComponent";

const HomePage = () => {
  const [homeProducts, setHomeProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products/allproducts")
      .then((res) => {
        setHomeProducts(res.data.splice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderProducts = (product) => {
    if (product) {
      return (
        <ProductComponent
          key={product._id}
          name={product.wineName}
          src={product.wineImage}
          year={product.wineYear}
          price={product.winePrice}
          description={product.wineDescription}
          sku={product.wineSKU}
        ></ProductComponent>
      );
    } else return;
  };

  return (
    <div className="homepage">
      <div className="banner">
        <div className="border"> </div>
        <h2>Our fine selection of wines</h2>
        <p>Shop From World Leading Wineries</p>
        <div className="border border-bottom"> </div>
      </div>
      <br />
      <br />
      <h1>Selected items from our collection</h1>
      <br />
      <br />
      <Grid
        container={true}
        spacing={2}
        sx={{ width: "95%", marginLeft: "2.5%" }}
      >
        {homeProducts.map(renderProducts)}
      </Grid>
      <br />
      <Link to="/store">
        <Button
          color="primary"
          endIcon={<ChevronRightIcon />}
          sx={{ color: "#950841" }}
        >
          View Store
        </Button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
