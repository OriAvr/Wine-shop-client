import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import "./adminPage.css";

import { Grid, Button } from "@mui/material";

import ProductComponent from "../../components/products/ProductComponent";

import { toast } from "react-toastify";

const AdminPage = () => {
  const token = localStorage.getItem("tokenKey");

  const [wineName, setWineName] = useState();
  const [wineType, setWineType] = useState("Red");
  const [wineDescription, setWineDescription] = useState();
  const [winery, setWinery] = useState();
  const [wineYear, setWineYear] = useState();
  const [winePrice, setWinePrice] = useState();
  const [wineStock, setWineStock] = useState();
  const [wineImage, setWineImage] = useState(
    "https://pics.clipartpng.com/midle/Black_Wine_Bottle_PNG_Clipart-76.png"
  );
  const [wineSKU, setWineSKU] = useState();

  const handleAddProduct = () => {
    axios
      .post(
        "products/add",
        {
          wineName,
          wineDescription,
          winery,
          wineType,
          wineYear,
          winePrice,
          wineStock,
          wineImage,
          wineSKU,
        },
        {
          token: `${token}`,
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Added Product");
      })
      .catch((err) => {
        console.log(err.response);
        toast.warn("Add Product Failed");
      });
  };

  const handleName = (event) => {
    setWineName(event.target.value);
  };
  const handleType = (event) => {
    setWineType(event.target.value);
  };
  const handleDescription = (event) => {
    setWineDescription(event.target.value);
  };
  const handleWinery = (event) => {
    setWinery(event.target.value);
  };
  const handleYear = (event) => {
    setWineYear(event.target.value);
  };
  const handlePrice = (event) => {
    setWinePrice(event.target.value);
  };
  const handleStock = (event) => {
    setWineStock(event.target.value);
  };
  const handleImage = (event) => {
    setWineImage(event.target.value);
  };
  const handleSKU = (event) => {
    setWineSKU(event.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            variant="outlined"
            label="Wine Name"
            onChange={handleName}
            helperText="Minimum 2 letters"
          ></TextField>
          <br />
          <br />
          {/* SELECT SELECT SELECT SELECT*/}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Wine Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={wineType}
              label="Age"
              onChange={handleType}
            >
              <MenuItem value={"Red"}>White</MenuItem>
              <MenuItem value={"White"}>Red</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine Description"
            onChange={handleDescription}
            helperText="Minimum 10 letters"
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Winery"
            onChange={handleWinery}
            helperText="Minimum 2 letters"
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine's Year"
            onChange={handleYear}
            helperText="Between 1900-2022"
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine's Price"
            onChange={handlePrice}
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine's Stock"
            onChange={handleStock}
            helperText="Number of units in stock"
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine's Image"
            onChange={handleImage}
          ></TextField>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="Wine's SKU"
            onChange={handleSKU}
            helperText="Minimum 10 characters"
          ></TextField>
          <br />
          <br />
          <Button variant="outlined" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Grid>
        <ProductComponent
          className="product"
          name={wineName}
          description={wineDescription}
          year={wineYear}
          price={winePrice}
          src={wineImage}
        ></ProductComponent>
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default AdminPage;
