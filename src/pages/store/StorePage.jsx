import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Grid } from "@mui/material";
import ProductComponent from "../../components/products/ProductComponent";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [whiteWines, setWhiteWines] = useState([]);
  const [redWines, setRedWines] = useState([]);

  const [whiteChecked, setWhiteChecked] = useState(true);
  const [redChecked, setRedChecked] = useState(true);

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
      const red = products.filter((product) => product.wineType === "Red");
      const white = products.filter((product) => product.wineType === "White");

      setWhiteWines(white);
      setRedWines(red);
    }
  }, [products]);

  const renderWhiteWines = () => {
    setWhiteChecked(!whiteChecked);
  };
  const renderRedWines = () => {
    setRedChecked(!redChecked);
  };

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
    <div>
      <br />
      <br />
      <br />
      <FormControlLabel
        label="Red Wines"
        control={
          <Checkbox
            color="secondary"
            onClick={renderRedWines}
            checked={redChecked}
          />
        }
      />
      <FormControlLabel
        label="White Wines"
        control={
          <Checkbox
            color="default"
            onClick={renderWhiteWines}
            checked={whiteChecked}
          />
        }
      />

      <Grid container spacing={2}>
        {redChecked && whiteChecked ? (
          products.map(renderProducts)
        ) : redChecked && !whiteChecked ? (
          redWines.map(renderProducts)
        ) : whiteChecked && !redChecked ? (
          whiteWines.map(renderProducts)
        ) : (
          <h3>Check The Releavant Boxes To See Items</h3>
        )}
      </Grid>
    </div>
  );
};

export default StorePage;
