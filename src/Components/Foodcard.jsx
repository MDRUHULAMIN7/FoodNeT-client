import { Link } from "react-router-dom";


const Foodcard = ({food}) => {
    const {donatorname,_id,donatorphoto,name,image,quantity,location,date,foodstatus,additonalnotes}=food
    return (
        <div className="h-96 hover:border-2 hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-500">
            <div      className="bg-no-repeat mb-2 hero bg-cover h-2/5 w-full"
        style={{
          backgroundImage: `url(${image})`,
        }}>
        
            <div className="flex mt-[108px] w-full justify-between px-1 "><h1 className="bg-green-500 text-xl text-center py-2 px-2 ">{foodstatus}</h1> <h1 className="bg-rose-600 text-xl  px-2 py-2 ">Quantity : {quantity}</h1></div>

            </div>
            <hr />
            <div className="h-3/5 mt-2  hover:px-2 ">
                <div className="flex my-2 justify-between items-center text-2xl ">
                    <img className="h-14 border-2 border-rose-600 rounded-full" src={donatorphoto} alt="" /> <h1>Donateby:{donatorname}</h1>
                </div>
                <hr />
                <div>
<p className="flex justify-between my-2"><h1 className="text-2xl font-semibold">{name}</h1>
<h1 className="text-xl">{location}</h1></p>
<h1 className="font-semibold ">ExpireDate:{date}</h1>
<p>{additonalnotes.slice(0,40)}</p>
<Link to={`/fooddetail/${_id}`}>
<button className="w-full bg-rose-600 py-2  mt-3 text-white font-semibold">View Details</button>
</Link>

                </div>

            </div>
           
        </div>
    );
};

export default Foodcard;