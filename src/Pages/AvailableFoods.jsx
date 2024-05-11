
import { useLoaderData } from "react-router-dom";
import Foodcard from "../Components/Foodcard";


const AvailableFoods = () => {
    const foods=useLoaderData()
  
    const availablefoods=foods.filter((food)=> food.foodstatus === "Available")    
    console.log(availablefoods);               
    console.log(foods);
    return (
        <div>
            <h1 className="text-3xl md:text-4xl text-center my-5">Available Foods</h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                 availablefoods.map(food=><Foodcard key={food._id} food={food}></Foodcard>)
            }
        </div>
        </div>
    );
};

export default AvailableFoods;