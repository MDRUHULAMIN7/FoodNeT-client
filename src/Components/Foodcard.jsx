import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { CgCalendarDates } from "react-icons/cg";
import { LuBookmarkPlus } from "react-icons/lu";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";

const Foodcard = ({ food }) => {
	const {user}= useContext(AuthContext)
	const [active,setactive]=useState(false)
	console.log(user);

  const {
    donatorname,
    _id,
    donatorphoto,
    name,
    image,
    quantity,
    location,
    date,
    foodstatus,
    additonalnotes,
  } = food;



  

  const addBookmark=food=>{
	setactive(true)
	console.log(food);
	const bookmark ={
		name:food.name,
		image:food.image,
		email: user?.email,
		location:food.location,
		price :food.price,
		date:food.date,
		status:food.foodstatus

	}

	
fetch('https://foodnet-server.vercel.app/bookmarks',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(bookmark)
})
.then(res=> res.json())
.then(data=>{
    if(data.insertedId){
        toast.success('Food Added to Bookmark')
    }
   
    // console.log(data);
})


  }

  return (
    <div className="rounded-md shadow-md  hover:shadow-2xl hover:shadow-rose-500  dark:bg-gray-50 dark:text-gray-800 ">
	<div className="">
		<div>
		<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={donatorphoto} alt="" className=" w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
			<div className="space-y-1">
				<h2 className="text-sm font-semibold leading-none">{donatorname}</h2>
				
			</div>
		</div>
		<h1 className="px-1 py-1 bg-green-500 rounded-lg">{foodstatus}</h1>
	</div>
		</div>
		<div>
		<img src={image} alt="" className="object-cover object-center w-full h-60 dark:bg-gray-500" />
		</div>
  

	
    </div>
	<div className=" h-1/2 p-1">
		<div className="flex  justify-between">
			<div className="flex items-center space-x-3">
				
			</div>
			
		</div>
		<div className=" pt-1 pb-1">
			<div className="flex justify-between items-center">
			
			<div className="flex items-center  gap-5">
			<h1 className="text-3xl">{name}</h1> <h1 className="text-xl pt-3 flex gap-1 items-center"><span className="text-rose-500"><ImLocation></ImLocation></span>{location}</h1>
			</div>
		<div>
		<button  onClick={()=>addBookmark(food)} disabled={active} className="mt-1 disabled:text-green-500"><LuBookmarkPlus className="w-12 h-8"></LuBookmarkPlus></button>
		</div>
			</div>
		</div>
		<div className="flex space-x-2 text-lg mb-2 ">
			<h1 className="flex gap-1 items-center "> <span className="text-rose-500"><CgCalendarDates></CgCalendarDates></span>{date}</h1> , <h1>Quantity:{quantity}</h1>
		
		</div>
    <div className="flex justify-between">
	<p className="text-gray-400">{additonalnotes.slice(0,30)}...</p>

<Link to={`/fooddetail/${_id}`} className="px-3 text-rose-600 rounded-lg hover:text-white bg-base-200 hover:bg-rose-600 py-2 mt-2 text-right"><button>View Details</button></Link>
	</div>
	</div>
</div>
  );
};

export default Foodcard;
