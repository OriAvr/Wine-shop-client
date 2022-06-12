import React, { useState } from "react";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddFavorite = (props) => {
  const [favorite, setFavorite] = useState(false);

  const handleAddFavorite = (event) => {
    event.preventDefault();
    const userEmail = localStorage.getItem("userEmail");

    axios
      .put(`users/favorite/${props.sku}`, { userEmail })
      .then((res) => {
        if (res.data === false) setFavorite(false);
        else if (res.data === true) setFavorite(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <a href="#" className="buy-btn" onClick={handleAddFavorite}>
      {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </a>
  );
};

export default AddFavorite;
