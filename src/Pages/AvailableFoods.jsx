
import { useLoaderData } from "react-router-dom";
import Foodcard from "../Components/Foodcard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";


const AvailableFoods = () => {
    const{setLoading}=useContext(AuthContext)
    const foods=useLoaderData()
    const[sortedfoods,setFoods]=useState([])
    const[search,setSearch]=useState([])
      
  useEffect(()=>{
    setFoods(foods)
      },[])

     
  
    const availablefoods=sortedfoods.filter((food)=> food.foodstatus === "Available")    
    console.log(availablefoods);               
    console.log(foods);

    const serchfoods = availablefoods.filter((food)=>food.name == search)
    console.log(serchfoods);
    
    const handleDescending=()=>{
        const sortfoods =[...availablefoods].sort((a,b)=>b.date.slice(8,10) - a.date.slice(8,10))

        setFoods(sortfoods)
        setLoading(true)

    }
    const handleAscending=()=>{
        const sortfoods =[...availablefoods].sort((a,b)=> a.date.slice(8,10)-b.date.slice(8,10))

        setFoods(sortfoods)
        setLoading(true)

    }
    console.log(sortedfoods);

    const handleSearch=e=>{
        e.preventDefault();
        const text = e.target.name.value;
  
        setSearch(text)
         fetch(`http://localhost:5000/foods/${search}`)
         .then(res=> res.json())
         .then(data=>{
            console.log(data);
            setFoods(data)
         })
    }
    return (
        <div>
            <h1 className="text-3xl md:text-4xl text-center my-5">Available Foods</h1>

            <div className="md:flex justify-center items-center my-5 gap-10">
            <div >

            <div className="join ">
  <div>
 <form  onSubmit={handleSearch}>
 <input className="input input-bordered join-item  bg-rose-600 w-96 text-xl  text-white font-bold" name="name" placeholder="Enter Food Title"/>

 <div className="indicator ">

    <input className="btn join-item bg-white text-xl  text-black " type="submit" value="Search" />
 
    
  </div>
 </form>
  </div>
 
 
</div>

                
                                </div>
                <div>
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort By ExpireDate</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

    <li><button onClick={handleAscending}>Ascending</button></li>
    <li><button onClick={handleDescending}>Descending</button></li>
  </ul>
</div> 
                </div>
             
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                 availablefoods.map(food=><Foodcard key={food._id} food={food}></Foodcard>)
            }
        </div>
        </div>
    );
};

export default AvailableFoods;