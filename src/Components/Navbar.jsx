import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/Authproviders";
import toast from "react-hot-toast";
import logo from "../assets/images/logo.png"


const Navbar = () => {

const {user,logOut}=useContext(AuthContext)
      const HandleSignOut=()=>{
        logOut()
        .then(()=>{
         toast.success('LogOut Succesfully')
        })
        .catch(error=>{
          toast.warning(error.message)
        })
      }

      
    return (
        <div className="navbar bg-rose-500   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        

            <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/"}>Home</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/addfood"}>AddFood</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/showall"}>AvailableFoods</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/register"}>SignUp</NavLink>
   
            </ul>
          </div>
          <div>
            <Link className="flex justify-center items-center md:text-2xl" to={'/'}>  <img className="h-12" src={logo} alt="" /> <p>FoodNeT</p></Link>
          
          </div>
    
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-xl space-x-3 ">
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/"}>Home</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/addfood"}>AddFood</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/showall"}>AvailableFoods</NavLink>
          <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/register"}>SignUp</NavLink>
          </ul>
        </div>
   
    <div className="navbar-end ">
      
      <div className="dropdown dropdown-end mr-5">
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <div>
            {
              !user ?
              <div  className="  text-xl font-semibold  rounded-lg text-white  "><Link to={'/login'}className=""> Login</Link> </div>

               :    <div  className="w-12 h-12 rounded-full border-purple-800 border-2 mr-2">
               
                   
                   <img title={user.displayName}  className="rounded-full h-full w-full" src={user.photoURL} alt="" />
          
                   
                </div>
     }
            

          
 
          </div>
        </div>

        {
            user ?
<ul tabIndex={0} className="mt-3 z-[1] p-2  shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-64 ">


<div className=""><h1 className="text-xl text-left text-rose-600 pl-2">{user.displayName}</h1>
<div className="m-2 text-xl text-black">
  
{
  user ? <NavLink title="Go to your added food" className={({isActive,isPending})=>
    isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/mymanagefood"}>MyManageFood</NavLink> :""
}

</div>
<div className="m-2 text-xl text-black">
  
{
  user ? <NavLink title="Go to your added food" className={({isActive,isPending})=>
    isPending ? 'text-blue-500 ' : isActive ? 'text-white  rounded-lg' :'' } to={"/myfoodrequest"}>MyRequestFood</NavLink> :""
}

</div>
<div>
<button className="btn-secondary rounded-full w-full py-2 mx-auto bg-rose-600 m-2 text-white" onClick={HandleSignOut}>LogOut</button>
</div>

</div>




</ul>:<div><h1></h1></div>


        }
        
      </div>
    </div>


      </div>
    );
};

export default Navbar;