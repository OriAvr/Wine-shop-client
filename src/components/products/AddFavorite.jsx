import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddFavorite = (props) => {
  const userEmail = localStorage.getItem("userEmail");
  const connected = useSelector((state) => state.auth.loggedIn);
  const [favorites, setFavorites] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (connected) {
      axios
        .get(`users/favorites/${userEmail}`)
        .then((res) => {
          setFavorites(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    favorites.map((favorite) => {
      if (favorite === props.sku) setFavorite(true);
    });
  }, [favorites]);

  const handleAddFavorite = (event) => {
    event.preventDefault();

    axios
      .put(`users/favorite/${props.sku}`, { userEmail })
      .then((res) => {
        setFavorite(res.data);
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
