import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponent from "../../components/products/ProductComponent";
import { Grid } from "@mui/material";

const FavoriteProducts = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [userFavorites, setUserFavorites] = useState([]);

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //Get user's favorites
  useEffect(() => {
    axios
      .get(`users/favorites/${userEmail}`)
      .then((res) => {
        setUserFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Get all products
  useEffect(() => {
    axios
      .get("/products/allproducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Check if products are loaded
  useEffect(() => {
    if (products.length > 0) {
      setLoaded(true);
    }
  }, [products]);

  //Check if the product is a favorite
  const checkFavorite = (product) => {
    for (let i = 0; i < userFavorites.length; i++) {
      if (product.wineSKU === userFavorites[i]) return true;
    }
  };

  const renderProducts = (product) => {
    if (checkFavorite(product)) {
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
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        {!loaded ? <h1>Loading...</h1> : products.map(renderProducts)}
      </Grid>
    </div>
  );
};

export default FavoriteProducts;
