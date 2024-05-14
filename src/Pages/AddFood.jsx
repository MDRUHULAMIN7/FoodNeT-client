import { useContext } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
// import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const{displayName,email,photoURL}=user

  const handleAddFood=e=>{
    e.preventDefault();

    const donatorname=displayName;
    const donatoremail=email;
    const donatorphoto=photoURL;
    const name=e.target.name.value;
    const image=e.target.image.value;
    const quantity=e.target.quantity.value;
    const location=e.target.location.value;
    const date=e.target.date.value;
    const foodstatus=e.target.foodstatus.value;
    const additonalnotes=e.target.notes.value;

    // console.log(donatorname,donatoremail,donatorphoto,name,image,quantity,location,date,foodstatus,additonalnotes);
    
    const food = {donatorname,donatoremail,donatorphoto,name,image,quantity,location,date,foodstatus,additonalnotes}

fetch('https://foodnet-server.vercel.app/foods',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(food)
})
.then(res=> res.json())
.then(data=>{
    if(data.insertedId){
        toast.success('Food Added Succesfully')
    }
   
    // console.log(data);
})



  }


  return (
    <div className="w-2/3 mx-auto px-4">
        <h1 className="text-3xl text-black text-center mt-5">Add Food</h1>
      <form action="" onSubmit={handleAddFood}>
        <div className="mt-5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="space-y-2">
              <label htmlFor="">FoodName:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="FoodName"
                required
                type="text"
                name="name"
                id=""
              />
            </div>
        <div className="space-y-2">
              <label htmlFor="">FoodImage:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="imageurl"
                required
                type="text"
                name="image"
                id=""
              />
            </div>
        <div className="space-y-2">
              <label htmlFor="">FoodQuantity:</label>
              <br />
              <input
                className="border-2  border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="quantity"
                required
                type="number"
                name="quantity"
                id=""
              />
            </div>
        <div className="space-y-2">
              <label htmlFor="">Pickup Location:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="location"
                required
                type="text"
                name="location"
                id=""
              />
            </div>
        <div className="space-y-2">
              <label htmlFor="">ExpireDate:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="expiredate"
                required
                type="date"
                name="date"
                id=""
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="">FoodStatus:</label>
              <br />   <Helmet> <title>FoodNeT/AddFood</title></Helmet>
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="foodstatus" readOnly  value={"Available"}
                type="text"
                name="foodstatus"
                id=""
              />
            </div>
        <div className="space-y-2 md:col-span-2 col-span-1">
              <label htmlFor="">AdditionalNotes:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="additionalnotes" required
                type="text"
                name="notes"
                id=""
              />
            </div>
        
        <div className="space-y-2 md:col-span-2 col-span-1 text-xl text-white">
             
              <br />
              <input
                className="border-2 border-purple-500 bg-rose-600 rounded-xl px-3 py-2 w-full"
              
                type="submit"
                value="Add Food"
                id=""
              />
            </div>
         
        
        </div>
      </form>
    </div>
  );
};

export default AddFood;
