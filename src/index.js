import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setUpAxios } from "./modules/helper/axiosHelper";
import { store } from "./modules/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// n
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  <App />
  //   </Provider>
  // </React.StrictMode>
);

reportWebVitals();
