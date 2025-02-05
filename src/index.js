import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Initialize IDKit
const onIDKitInitSuccess = (result) => {
  console.log(result);
};

const onIDKitInitError = (error) => {
  console.log(error);
};

// Initialize IDKit once the window has loaded to ensure the CDN script is ready
window.addEventListener("load", () => {
  if (window.IDKit) {
    window.IDKit.init({
      app_id: "app_lshSNnaJfdt6Sohu6YAA",
      action: "my_action",
      onSuccess: onIDKitInitSuccess,
      onError: onIDKitInitError,
    });
    window.IDKit.open();
  } else {
    console.error("IDKit is not available");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
