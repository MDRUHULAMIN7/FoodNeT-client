import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/Authproviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyManageFood = () => {
    const[foods,setfoods]=useState([])
  
    const{user}=useContext(AuthContext)
    const{email}=user
   useEffect(()=>{
    fetch(`http://localhost:5000/foods-email/${email}`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        setfoods(data)
    })
    // console.log(foods);
   },[email,foods])




   const handleDelete=_id=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods-id/${_id}`,{
          method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire(
               "Deleted Succesfully!",
               "Your Food has deleted.",
            "success"
            )
            const remainfoods = foods.filter(list =>list._id !== _id);
            setfoods(remainfoods)
          }
        })
       
      }
    });

   }



  //  update






    return (
        <div>
             <h1 className="text-3xl md:text-4xl text-center my-4">Your Added Foods</h1>


            <div className="w-11/12 mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-xl text-rose-500 font-semibold">
      <tr>
        <th>
        About Food
        </th>
        <th>Quantity</th>
        <th>Expiredate</th>
        <th>Status</th>
        <th>UpdateFood</th>
        <th>DeleteFood</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
     {
        foods.map(food=> <tr key={food._id}>
       
            <td>
              <div className="flex items-center gap-3 text-xl">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{food.name}</div>
                  <div className=" ">{food.location}</div>
                </div>
              </div>
            </td>
            <td className="text-lg">
             {food.quantity}
            
            </td>
            <td className="text-lg">{food.date}</td>
            <td className="text-lg">{food.foodstatus}</td>
            <th>
             

             <Link to={`/myupdate/${food._id}`}><button  className="btn  text-lg bg-green-500 rounded-xl ">Update</button></Link>
            </th>
            <th>
              <button onClick={()=>handleDelete(food._id)} className="btn  text-lg bg-rose-500 rounded-xl ">Delete</button>
            </th>
          </tr>)
     }
    
    </tbody>

    
  </table>
</div>
            </div>
        </div>
    );
};

export default MyManageFood;