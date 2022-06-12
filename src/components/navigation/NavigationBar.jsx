import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#ffcd00",
  },
  navlinks: {
    marginLeft: theme.spacing(20),
    display: "flex",
    position: "absolute",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginRight: theme.spacing(7),
    "&:hover": {
      color: "#659fbc",
    },
    icons: {
      display: "flex",
      position: "absolute",
    },
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const connected = useSelector((state) => state.auth.loggedIn);
  const token = localStorage.getItem("tokenKey");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setIsAdmin(decoded.biz);
    }
  }, [isAdmin]);

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Logo
        </Typography>
        <Link to="/login" className={classes.icons}>
          <AccountCircleIcon style={{ color: "white" }} fontSize="large" />
        </Link>
        <Link to="/cart" className={classes.icons}>
          <ShoppingCartIcon style={{ color: "white" }} fontSize="large" />
        </Link>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/store" className={classes.link}>
              Store
            </Link>

            <Link to="/about" className={classes.link}>
              About
            </Link>
            {connected ? (
              <Link to="/favorites" className={classes.link}>
                Favorites
              </Link>
            ) : (
              <div />
            )}
            {isAdmin && connected ? (
              <Link to="/admin" className={classes.link}>
                Admin
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
