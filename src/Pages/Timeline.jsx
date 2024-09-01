import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className="bg-gray-100 py-16 mt-10 rounded-lg">
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-10 relative">
                <h3 className="text-4xl font-bold text-gray-900 mb-2 relative z-10">
                  FoodNeT
                </h3>
                <span className="text-lg font-semibold tracking-wider uppercase text-rose-600 relative z-10">
                  Share a Plate of Food
                </span>
                <div className="absolute bottom-0 left-0 w-24 h-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded-md"></div>
              </div>
            </div>
            <div className="relative col-span-12 sm:col-span-9">
              <div className="relative px-6">
                <div className="space-y-12 relative">
                  <motion.div
                    className="flex flex-col sm:relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="absolute top-4 left-[-16px] w-6 h-6 bg-violet-600 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Still helping people by sharing food</h3>
                    <time className="text-xs font-semibold uppercase text-rose-500 block mt-2">Dec 2023</time>
                    <p className="mt-3 text-gray-700">
                      Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="absolute top-4 left-[-16px] w-6 h-6 bg-violet-600 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-800">People start to join us</h3>
                    <time className="text-xs font-semibold uppercase text-rose-500 block mt-2">Jul 2021</time>
                    <p className="mt-3 text-gray-700">
                      Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="absolute top-4 left-[-16px] w-6 h-6 bg-violet-600 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-800">We start our journey</h3>
                    <time className="text-xs font-semibold uppercase text-rose-500 block mt-2">Jan 2020</time>
                    <p className="mt-3 text-gray-700">
                      Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.
                    </p>
                  </motion.div>
                </div>
                <div className="absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-t from-rose-500 via-violet-600 to-gray-300 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
