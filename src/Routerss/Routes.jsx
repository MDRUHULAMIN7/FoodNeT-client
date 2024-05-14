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
import MyManageFood from "../Pages/Authentications/MyManageFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import MyUpdate from "../Pages/MyUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/foods', {credentials:'include'}
       )
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
        loader:()=>fetch('http://localhost:5000/foods', {credentials:'include'}
        )
      },
      {
        path:'/fooddetail/:id',
        element:<PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/foods', {credentials:'include'})
      },
      {
        path:'/mymanagefood',
        element:<PrivateRoute><MyManageFood></MyManageFood></PrivateRoute>
      }
      ,
      {
        path:'/myfoodrequest',
        element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/foods', {credentials:'include'})
      },
      {
        path:`/myupdate/:id`,
        element:<PrivateRoute><MyUpdate></MyUpdate></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/foods', {credentials:'include'})
      }
      
    ],
  },
]);

export default router;
