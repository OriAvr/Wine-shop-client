import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponent from "../products/ProductComponent";
import { Grid } from "@material-ui/core";

const FavoriteProducts = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [userFavorites, setUserFavorites] = useState([]);

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    if (products.length > 0) {
      setLoaded(true);
    }
  }, [products]);

  const checkFavorite = (product) => {
    for (let i = 0; i < userFavorites.length; i++) {
      if (product.sku === userFavorites[i]) return true;
    }
  };

  const renderProducts = (product) => {
    if (checkFavorite(product)) {
      return (
        <ProductComponent
          key={product._id}
          name={product.name}
          src={product.image}
          year={product.year}
          price={product.price}
          description={product.description}
          sku={product.sku}
        ></ProductComponent>
      );
    }
  };

  return (
    <Grid container spacing={2}>
      {!loaded ? <h1>Loading...</h1> : products.map(renderProducts)}
    </Grid>
  );
};

export default FavoriteProducts;
