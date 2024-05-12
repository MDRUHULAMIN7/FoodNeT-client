import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import router from "./Routerss/Routes.jsx";


import Authproviders from "./AuthProviders/Authproviders.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <Authproviders>
      <RouterProvider router={router}> </RouterProvider>
      <Toaster />
      <Toaster position="top-center" reverseOrder={false} />
    </Authproviders>
    </HelmetProvider>
  </React.StrictMode>
);
