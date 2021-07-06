import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserStoreProvider } from "./store/user-store/user-store";

import 'antd/dist/antd.css'

import App from "./App";
import "./index.scss";
import "./i18n";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStoreProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </UserStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
