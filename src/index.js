import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import { UserProvider } from "./features/user/userContext";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <HashRouter>
          <ToastContainer autoClose={1500} />
          <ScrollToTop />
          <App />
        </HashRouter>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
