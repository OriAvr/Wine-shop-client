import { Typography } from "@material-ui/core";
import React from "react";

import { useSelector } from "react-redux";

import ProductComponent from "../../components/products/ProductComponent";

const HomePage = () => {
  const connected = useSelector((state) => state.auth.loggedIn);

  return (
    <div className="homepage">
      <Typography variant="h1">We Drink Wine</Typography>
      {connected ? <h3>Hello User</h3> : <h1>Login Please</h1>}
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
