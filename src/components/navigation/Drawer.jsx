import React, { useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import jwt_decode from "jwt-decode";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    marginLeft: "60px",
    marginRight: "60px",
    color: "#000000",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
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
    <>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/store" className={classes.link}>
                Store
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Login" className={classes.link}>
                Login
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          {connected ? (
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/favorites" className={classes.link}>
                  Favorites
                </Link>
              </ListItemText>
            </ListItem>
          ) : (
            <div />
          )}
          {isAdmin && connected ? (
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/admin" className={classes.link}>
                  Admin
                </Link>
              </ListItemText>
            </ListItem>
          ) : (
            <div />
          )}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
