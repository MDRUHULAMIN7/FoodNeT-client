import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProviders/Authproviders";
// import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const FoodDetail = () => {
  const foods = useLoaderData();
  const { id } = useParams();
  const[suces,setSucces]=useState('')
  const[error,setError]=useState('')
  console.log(id, foods);
  const detailfood = foods.find((food) => food._id === id);
  console.log(detailfood);
  const {
    donatorname,
    donatoremail,
    donatorphoto,
    name,
    image,
    quantity,
    location,
    date,
   _id,
    foodstatus,
    additonalnotes,
  } = detailfood;

  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(donatoremail);
  const{email}=user
  const handleFoodReq = (e) => {
    e.preventDefault();


  
    const useremail =email
 
    const name=e.target.name.value;
    const image=e.target.image.value;
    const quantity=e.target.quantity.value;
    const location=e.target.location.value;
    const date=e.target.date.value;
    const donateamount=e.target.donateamount.value;
    const requestdate=e.target.requestdate.value;
    const foodstatus="requested";
    const additonalnotes=e.target.notes.value;
    const updatefood = {donatorname,donatoremail, donateamount,donatorphoto,name,useremail ,image,quantity,location,date,foodstatus,additonalnotes,requestdate}
    console.log(requestdate);
    console.log(updatefood);

    if(foodstatus !== "Available"){
      setError('your requested food is unavailable')
      return
    }
   
    if(useremail === donatoremail){
        setError('You can not request for this food')
        return
    }
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
      
    }
    console.log(data);
})

   
  };
  return (
    <div>
      <div
        className="md:h-[80vh] w-11/12 mx-auto md:flex lg:p-10 hover:shadow-2xl py-5 hover:shadow-rose-500
"
      >
        <div className="bg-no-repeat hero bg-cover md:w-1/2 h-full ">
          <img className="w-full  rounded-xl h-full" src={image} alt="" />

          <hr />
        </div>
        <div className="md:w-1/2 px-2 hover:pl-4 ">
          <div className="flex my-2 justify-between items-center md:text-2xl ">
            <img className="h-20  rounded-full" src={donatorphoto} alt="" />{" "}
            <h1>Donateby:{donatorname}</h1>
            <h1>Email:{donatoremail}</h1>
          </div>
          <hr />
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <p className=" my-2">
              <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-4">
                {name}
              </h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl">{location}</h1>
            </p>
            <h1 className="font-semibold md:text-2xl text-xl ">
              ExpireDate:{date}
            </h1>
            <div className="  justify-between px-1 ">
              <h1 className="text-xl  md:text-2xl lg:text-3xl  py-2 ">
                FoodStatus:{foodstatus}
              </h1>{" "}
              <h1 className=" text-xl md:text-2xl lg:text-3xl  py-2 ">
                Quantity : {quantity}
              </h1>
            </div>
          </div>
          <p>{additonalnotes}</p>

          {/* modal */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=" w-full bg-rose-600 py-2  mt-3 text-white font-semibold"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Request For The Food
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {/* updat */}
              <div className="w-2/3 mx-auto px-4">
                <h1 className="text-3xl text-black text-center mt-5">
                  Request For Food
                </h1>
                <p className="text-center my-3 text-xl text-red-600">{error}</p>
                
                <p className="text-center my-3 text-xl text-green-600">{suces}</p> 
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
                      <label htmlFor="">RequestDate:</label>
                      <br />
                      <input
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="additionalnotes"
                        type="date"
                        required
                        name="requestdate"
                       
                      />
                    </div>
                    <div className="space-y-2 ">
                      <label htmlFor="">DonateAmount:</label>
                      <br />
                      <input
                      required
                        className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                        placeholder="additionalnotes"
                        type="number"
                        name="donateamount"
                       
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
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
              {/* updat */}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* modal */}

          <hr />
          <Link to={`/showall`} className="mt-2">
            <button className="w-full bg-green-600 py-2  mt-3 text-white font-semibold">
              Show All Available Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
