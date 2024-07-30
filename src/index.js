import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
// import { CategoriesProvider } from "./contexts/categories.context";
// import { CartProvider } from "./contexts/cart.context";
import { stripePromise } from "./utils/stripe/stripe-utils";

import "./index.scss";
import { store, persistor } from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <UserProvider>
            {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
            {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          </UserProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
