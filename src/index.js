import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/index";

//Axios setup
axios.defaults.baseURL = "http://localhost:8181/the_shop";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenKey");
  if (token) {
    //if token saved in localStorage
    config.headers["token"] = token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

//Redux setup

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
