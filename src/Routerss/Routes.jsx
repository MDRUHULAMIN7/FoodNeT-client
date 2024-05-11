import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Register from "../Pages/Authentications/Register";

import Login from "../Pages/Authentications/Login";
import PrivateRoute from "../AuthProviders/PrivateRoute";
import Home from "../Components/Home";
import AddFood from "../Pages/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import FoodDetail from "../Pages/FoodDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/foods')
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addfood",
        element: 
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        
      },
      {
        path:'showall',
        element:<AvailableFoods></AvailableFoods>,
        loader:()=>fetch('http://localhost:5000/foods')
      },
      {
        path:'/fooddetail/:id',
        element:<PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/foods')
      }
      
    ],
  },
]);

export default router;
