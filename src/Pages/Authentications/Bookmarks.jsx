import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/Authproviders";
import { Helmet } from "react-helmet";


const Bookmarks = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    const {email}=user
    const [bookmarks,setBookmarks]=useState([])

    useEffect(()=>{
        fetch(`https://foodnet-server.vercel.app/bookmarks/${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setBookmarks(data)
        })
    },[email])
  
    return (
        <div>   <Helmet> <title>FoodNeT/Bookmarks</title></Helmet>
        <h1 className="text-3xl md:text-4xl text-center my-4">Your Bookmarks Foods</h1>


       <div className="w-11/12 mx-auto">
       <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className="text-xl text-rose-500 font-semibold">
 <tr>
   <th>
  Photo
   </th>
   <th>Name</th>
   <th>Location</th>
   <th>Expiredate</th>
   <th>Status</th>
 
   
 </tr>
</thead>
<tbody >
 {/* row 1 */}
{
  bookmarks?.map(food=> <tr key={food._id}>
  
       <td>
         <div className="flex items-center gap-3 text-xl">
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={food.image} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
          
         </div>
       </td>
       <td className="text-lg">
       <div className="font-bold">{food.name}</div>
       
       </td>
       <td className="text-lg">
        {food.location}
       
       </td>
       <td className="text-lg">{food.date}</td>
       <td className="text-lg">{food.status}</td>
      
      
     </tr>)
}

</tbody>


</table>
</div>
       </div>
   </div>
    );
};

export default Bookmarks;