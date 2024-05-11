
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Root = () => {
    return (
        <div className="md:mx-10 mx-3">
           <Navbar></Navbar>
         <Outlet></Outlet> 
       
        </div>
    );
};

export default Root;