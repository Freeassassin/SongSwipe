import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import authSaga from "./state/authSaga";
import configureAppStore, { sagaMiddleware } from "./state/store";
import { Provider } from "react-redux";

const store = configureAppStore();

sagaMiddleware.run(authSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
