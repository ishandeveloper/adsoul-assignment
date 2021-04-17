import React from "react";
import ReactDOM from "react-dom";

import MainApp from "./app";
import { Provider } from "react-redux";
import { store } from "./store";

// Styling
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
