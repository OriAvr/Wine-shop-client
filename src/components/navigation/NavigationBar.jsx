import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "./navbar.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavigationBar = () => {
  const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    return width <= 1024;
  };
  const isMobile = useCheckMobileScreen();

  const connected = useSelector((state) => state.auth.loggedIn);
  const token = localStorage.getItem("tokenKey");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setIsAdmin(decoded.isAdmin);
    }
  }, [connected]);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3> </h3>

      {isMobile ? (
        <nav ref={navRef}>
          <Link to="/" onClick={showNavbar}>
            Home
          </Link>
          <Link to="/store" onClick={showNavbar}>
            Store
          </Link>
          <Link to="/about" onClick={showNavbar}>
            About
          </Link>
          {connected ? (
            <Link to="/favorites" onClick={showNavbar}>
              Favorites
            </Link>
          ) : (
            <Link to="/login" onClick={showNavbar}>
              Favorites
            </Link>
          )}
          {isAdmin && connected ? (
            <Link to="/admin" onClick={showNavbar}>
              Admin
            </Link>
          ) : (
            <div />
          )}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      ) : (
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          {connected ? (
            <Link to="/favorites">Favorites</Link>
          ) : (
            <Link to="/login">Favorites</Link>
          )}
          {isAdmin && connected ? (
            <Link to="/admin">Admin</Link>
          ) : (
            <Link to="/" className="mockLink">
              g
            </Link>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      )}

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <Link to="/login" className="accountIcon">
        <AccountCircleIcon style={{ color: "white" }} fontSize="large" />
      </Link>
      <Link to="/cart" className="cartIcon">
        <ShoppingCartIcon style={{ color: "white" }} fontSize="large" />
      </Link>
    </header>
  );
};

export default NavigationBar;
