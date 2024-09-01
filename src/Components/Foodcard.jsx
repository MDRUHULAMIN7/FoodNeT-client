import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { CgCalendarDates } from "react-icons/cg";
import { LuBookmarkPlus } from "react-icons/lu";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";

const Foodcard = ({ food }) => {
  const { user } = useContext(AuthContext);
  const [active, setActive] = useState(false);

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

  const addBookmark = (food) => {
    setActive(true);
    const bookmark = {
      name: food.name,
      image: food.image,
      email: user?.email,
      location: food.location,
      price: food.price,
      date: food.date,
      status: food.foodstatus,
    };

    fetch("https://foodnet-server.vercel.app/bookmarks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Food Added to Bookmark");
        }
      });
  };

  return (
    <div className="rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-white dark:text-gray-800 transform hover:scale-105">
      <div className="relative">
        <div className="flex items-center justify-between p-3 bg-white rounded-t-md">
          <div className="flex items-center space-x-2">
            <img
              src={donatorphoto}
              alt=""
              className="w-12 h-12 rounded-full border-2 border-rose-500"
            />
            <div className="space-y-1">
              <h2 className="text-sm font-semibold leading-none text-gray-800">{donatorname}</h2>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-lg shadow">
            {foodstatus}
          </span>
        </div>

        <img
          src={image}
          alt={name}
          className="object-cover object-center w-full h-56 rounded-b-md"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold text-teal-600">{name}</h1>
          <button
            onClick={() => addBookmark(food)}
            disabled={active}
            className="text-rose-500 hover:text-green-500 transition-colors duration-200"
          >
            <LuBookmarkPlus className="w-8 h-8" />
          </button>
        </div>

        <div className="flex items-center space-x-2 text-lg mb-2">
          <ImLocation className="text-rose-500" />
          <span className="text-gray-600">{location}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CgCalendarDates className="text-rose-500" />
          <span className="ml-1">{date}</span> • <span className="ml-1">Quantity: {quantity}</span>
        </div>

        <p className="text-gray-500 mb-4">{additonalnotes.slice(0, 30)}...</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/fooddetail/${_id}`}
            className="text-teal-500 hover:text-white bg-teal-100 hover:bg-teal-500 transition-colors duration-200 px-3 py-2 rounded-full font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
