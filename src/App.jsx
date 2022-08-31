import React from "react";
import "./App.css";
import { Container, Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import FavoriteProducts from "./pages/favorites/FavoriteProducts";
import StorePage from "./pages/store/StorePage";
import AboutPage from "./pages/about/AboutPage";
import AdminPage from "./pages/admin/adminPage";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";

import {
  FavoritesRoute,
  AdminRoute,
} from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <ToastContainer position="bottom-right" />
      <br />

      <Box>
        <Container className="container" maxWidth="lg">
          <br />
          <br />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/about" element={<AboutPage />}></Route>
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
      </Box>
    </Router>
  );
}

export default App;
