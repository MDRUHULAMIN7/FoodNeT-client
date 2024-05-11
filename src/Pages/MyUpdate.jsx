import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProviders/Authproviders";


const MyUpdate = () => {
    const foods = useLoaderData();
    console.log(foods);
    const {id}=useParams()
    console.log(id);
    const[succes,setSucces]=useState('')
    const { user } = useContext(AuthContext);
  console.log(user);
  const{displayName,email,photoURL}=user
    const updarefood = foods.find(f=> f._id === id)
console.log(updarefood);

const {

    name,
    image,
    quantity,
    location,
    date,
   _id,
    foodstatus,
    additonalnotes,
  } = updarefood;
    
  const handleFoodReq = (e) => {
    e.preventDefault();


    const donatorname=displayName;
    const donatoremail=email;
    const donatorphoto=photoURL;
    const name=e.target.name.value;
    const image=e.target.image.value;
    const quantity=e.target.quantity.value;
    const location=e.target.location.value;
    const date=e.target.date.value;
    const requestdate=e.target.requestdate.value;
    const foodstatus="requested";
    const additonalnotes=e.target.notes.value;
    const updatefood = {donatorname,donatoremail,donatorphoto,name,image,quantity,location,date,foodstatus,additonalnotes,requestdate}
    console.log(requestdate);
    console.log(updatefood);
   
    // if(user.email===donatoremail){
    //     setError('You can not request for this food')
    //     return
    // }
fetch(`http://localhost:5000/foods/${_id}`,{
    method:"PATCH",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatefood)
})
.then(res=> res.json())
.then(data=>{
    if(data.modifiedCount>0){
        setSucces('Requested Succesfully')
        navigator('/')
    }
    console.log(data);
})

   
  };
    return (
       
        <div>
            
      
            <div className="w-2/3 mx-auto px-4">
                <h1 className="text-3xl text-black text-center mt-5">
                  Request For Food
                </h1>
                {/* <p className="text-center my-3 text-xl text-red-600">{error}</p> */}
                <p className="text-center my-3 text-xl text-green-600">{succes}</p>
                <form onSubmit={handleFoodReq } action="">
                  <div className="mt-5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="">FoodName:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="FoodName"
                        readOnly
                        value={name}
                        type="text"
                        name="name"
                       
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="">FoodImage:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="imageurl"
                        readOnly
                        value={image}
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
                        type="number"
                        readOnly
                        value={quantity}
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
                        type="text"
                        name="location"
                        readOnly
                        value={location}
                        id=""
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="">ExpireDate:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="expiredate"
                        type="date"
                        readOnly
                        value={date}
                        name="date"
                        id=""
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="">FoodStatus:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="foodstatus"
                        defaultValue={"Available"}
                        type="text"
                        name="foodstatus"
                        readOnly
                        value={foodstatus}
                        id=""
                      />
                    </div>
                    <div className="space-y-2 ">
                      <label htmlFor="">AdditionalNotes:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="additionalnotes"
                        type="text"
                        name="notes"
                        defaultValue={additonalnotes}
                        id=""
                      />
                    </div>
                    <div className="space-y-2 ">
                      <label htmlFor="">RequestDate:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="additionalnotes"
                        type="date"
                        name="requestdate"
                       
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2 col-span-1 text-xl text-white">
                      <br />
                      <input
                        className="border-2 border-purple-500 bg-rose-600 rounded-xl px-3 py-2 w-full"
                        type="submit"
                        value="Request"
                        id=""
                      />
                    </div>
                  </div>
                </form>
              </div>
        </div>
    );
};

export default MyUpdate;