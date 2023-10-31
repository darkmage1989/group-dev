import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Button from "./components/Button/Button";

const container = document.getElementById("root")!;
const root = createRoot(container);

const func = () => {
  console.log("hi");
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Button nameButton="Название" classNameAdd="" hendelFunc={func} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
