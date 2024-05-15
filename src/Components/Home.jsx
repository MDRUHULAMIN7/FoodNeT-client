import { Link, useLoaderData } from "react-router-dom";
import banner from "../assets/images/nl.jpg";
import banner2 from "../assets/images/rr.jpg";
import Foodcard from "./Foodcard";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";
import { Grid } from "react-loader-spinner";
import Team from "../Pages/Team";

import { Helmet } from "react-helmet";
import Timeline from "../Pages/Timeline";

const Home = () => {
const{loading}=useContext(AuthContext)

    const foods=useLoaderData();
    const sixfoods = foods.slice(0,6)
    // console.log(foods);
    if (loading)
      return (
        <p className="text-2xl pt-32 flex justify-center items-center">
          {" "}
          <Grid
            visible={true}
            height="80"
            width="80"
            color="red"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </p>
      );
  return (
    <div>
      <div id="home1"
        className="bg-no-repeat hero bg-cover h-full w-full"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="lg:flex lg:gap-5 bg-opacity-50  hero-overlay">
          <div className="lg:w-2/3 lg:m-20 md:m-10    lg:space-y-4 md:space-y-3 space-y-2 ">
            {" "}
            <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold text-rose-600 leading-10">
              Feast Together: Sharing Food, Donate Food With{" "}
              <span className="text-black">FoodNeT</span>
            </h1>
            <p className="mt-4 lg:text-2xl text-xl text-white ">
              Join our community-driven platform, connecting surplus food with
              those in need. Together, lets combat food waste and hunger. Share,
              save, and make a difference today!
            </p>
            <div className="md:flex gap-5 ">
              <div className="join ">
                <input
                  className="input ml-10 input-bordered join-item bg-rose-600"
                  placeholder="Email"
                />
                <button className="btn join-item rounded-r-full ">
                  Subscribe
                </button>
              </div>

              <p className="lg:text-3xl text-xl text-black flex justify-center ml-4">
                Subscribe and stay with us
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div
              className="md:mt-16 bg-no-repeat hero bg-cover rounded-full lg:h-96 lg:w-96 h-60 w-60 mx-auto"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="flex justify-center items-center">
                <Link to={'/addfood'} className="bg-rose-600 px-3 py-2 rounded-xl text-xl text-white">
                  Donate Foods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
<Helmet><title>FoodNeT/Home</title></Helmet>
      <div className="mt-10">
<h1 className="text-rose-600 text-center mb-5 md:text-5xl text-2xl ">Foods</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                 sixfoods.map(food=><Foodcard key={food._id} food={food}></Foodcard>)
            }
        </div>
        <div className="flex justify-center">
        <button title="click to show all available foods" className=" items-center px-6 text-xl py-2 rounded-xl my-4 bg-rose-600 text-white font-semibold"><Link to={'/showall'}>ShowAll</Link></button>
        </div>

     
      </div>
      {/* timeline */}

      <Timeline></Timeline>
      {/* team */}

      <div id="team">
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
