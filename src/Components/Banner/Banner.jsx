import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      id="home1"
      className="hero h-full w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dpomtzref/image/upload/v1725179062/nl_tfcxwt.jpg")`,
      }}
    >
      <div className="lg:flex lg:gap-5 bg-opacity-60 hero-overlay  p-6">
        <div className="lg:w-2/3 lg:m-20 md:m-10 space-y-2 lg:space-y-4">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-teal-500 leading-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Feast Together: Sharing Food, Donate Food With{" "}
            <span className="text-gray-900">FoodNeT</span>
          </motion.h1>
          <motion.p
            className="mt-4  lg:text-lg text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Join our community-driven platform, connecting surplus food with
            those in need. Together, lets combat food waste and hunger. Share,
            save, and make a difference today with us!
          </motion.p>
          <motion.div
            className="md:flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="join">
              <input
                className="input input-bordered join-item bg-gray-800 text-white placeholder-white"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full bg-teal-500 text-white">
                Subscribe
              </button>
            </div>

            <p className="text-xl lg:text-xl text-white font-semibold flex lg:justify-center lg:ml-4">
              Subscribe and stay with us
            </p>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/3 w-full flex justify-center items-start lg:items-center mt-8 lg:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div
            className="bg-no-repeat bg-cover rounded-full lg:h-96 lg:w-96 h-60 w-60 mx-auto mt-10 lg:mt-0 lg:ml-auto shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dpomtzref/image/upload/v1725179653/view-delicious-ready-eat-meal_cvaytl.jpg")`,
            }}
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full border-4 border-teal-500 animate-pulse opacity-75"></div>
            <div className="flex justify-center items-center h-full relative z-10">
              <Link
                to={'/addfood'}
                className="bg-teal-500 px-4 py-2 rounded-xl text-xl text-white hover:bg-teal-600 transition-colors"
              >
                Donate Foods
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
