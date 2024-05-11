
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
    return (
        <div className="md:mx-10 mx-3">
           <Navbar></Navbar>
         <Outlet></Outlet> 
       <Footer></Footer>
        </div>
    );
};

export default Root;