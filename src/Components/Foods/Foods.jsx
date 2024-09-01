import { Link, useLoaderData } from "react-router-dom";
import Foodcard from "../Foodcard";

const Foods = () => {
  const foods = useLoaderData();
  const sixfoods = foods?.slice(0, 6);

  return (
    <div className="mt-10 px-5">
      <h1 className="text-teal-500 text-center mb-5 md:text-5xl text-3xl font-semibold">
        Foods
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {sixfoods.map((food) => (
          <Foodcard key={food._id} food={food}></Foodcard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/showall">
          <button
            title="Click to show all available foods"
            className="flex items-center px-8 py-3 text-xl rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors"
          >
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;
