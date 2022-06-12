import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ProductComponent from "../../components/products/ProductComponent";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/products/allproducts")
      .then((res) => {
        setProducts(res.data);
        console.log(products);
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

  const renderProducts = (product) => {
    console.log(product);
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
  };

  return (
    <Grid container spacing={2}>
      {!loaded ? <h1>Loading...</h1> : products.map(renderProducts)}
    </Grid>
  );
};

export default StorePage;
