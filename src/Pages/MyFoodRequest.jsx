import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProviders/Authproviders";
import { Helmet } from "react-helmet";


const MyFoodRequest = () => {



    const foods = useLoaderData();
    const{user}=useContext(AuthContext)
    console.log(foods);
    console.log(user);

    const cfood = foods.filter((cc) => cc.foodstatus === "requested" && cc.useremail === user.email)


console.log(cfood);
//  const{
//  donatorname, 
//  location ,date,requestdate,donateamount


// }=cfood;


    return (
        <div className="mb-5">   <Helmet> <title>FoodNeT/MyFoodRequest</title></Helmet>
             <h1 className="text-3xl md:text-4xl text-center my-4">Your Requested Foods</h1>


            <div className="w-11/12 mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-xl text-rose-500 font-semibold">
      <tr>
      
        <th>DonarName</th>
        <th>Pickup Location</th>
        <th>ExpireDate</th>
        <th>RequestDate</th>
        <th>DonateAmount</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
     {
        cfood.map(food=> <tr key={food._id}>
       
           
            <td className="text-lg">
             {food.donatorname}
            
            </td>
            <td className="text-lg">{food.location}</td>
            <td className="text-lg">{food.date}</td>
            <td className="text-lg">{food.requestdate}</td>
            <td className="text-lg">{food.donateamount} $</td>
           
          </tr>)
     }
    
    </tbody>

    
  </table>
</div>
            </div>
        </div>
    );
};

export default MyFoodRequest;