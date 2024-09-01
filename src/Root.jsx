
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Grid } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "./AuthProviders/Authproviders";

const Root = () => {
  const{loading}=useContext(AuthContext)

    
    // console.log(foods);
    if (loading)
      return (
        <p className="text-2xl pt-32 flex justify-center items-center">
          {" "}
          <Grid
            visible={true}
            height="80"
            width="80"
            color="red"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </p>
      );
    return (
        <div className=" mx-1">
           <Navbar></Navbar>
         <Outlet></Outlet> 
       <Footer></Footer>
        </div>
    );
};

export default Root;