import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import router from "./Routerss/Routes.jsx";
// import 'react-toastify/dist/ReactToastify.css';

import Authproviders from "./AuthProviders/Authproviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router}> </RouterProvider>
      <Toaster />
      <Toaster position="top-center" reverseOrder={false} />
    </Authproviders>
  </React.StrictMode>
);
