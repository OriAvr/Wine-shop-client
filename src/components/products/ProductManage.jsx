import React from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";

const ProductManage = (props) => {
  return (
    <div>
      <Input defaultValue={props.sku}></Input>
      <Button>Save Changes</Button>
    </div>
  );
};

export default ProductManage;
