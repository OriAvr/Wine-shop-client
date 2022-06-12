import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import HomePage from "./pages/home/HomePage";
import LoginComponent from "./components/Registration/LoginComponent";
import RegistrationComponent from "./components/Registration/RegistrationComponent";
import FavoriteProducts from "./components/favorites/FavoriteProducts";
import StorePage from "./pages/store/StorePage";
import AdminPage from "./pages/admin/adminPage";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";

import {
  FavoritesRoute,
  AdminRoute,
} from "./components/protectedRoutes/ProtectedRoutes";

import { useSelector } from "react-redux";

// import { Button } from "@material-ui/core";
// import { ButtonGroup } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { Checkbox } from "@material-ui/core";
// import { TextField } from "@material-ui/core";

function App() {
  const a = useSelector((state) => state);
  console.log(a);
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Container className="container">
        <br />
        <br />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegistrationComponent />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<ShoppingCartPage />}></Route>
          <Route element={<FavoritesRoute />}>
            <Route path="/favorites" element={<FavoriteProducts />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
