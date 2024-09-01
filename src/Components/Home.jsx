import { useContext } from "react";
import { AuthContext } from "../AuthProviders/Authproviders";
import { Grid } from "react-loader-spinner";
import Team from "../Pages/Team";

import { Helmet } from "react-helmet";
import Timeline from "../Pages/Timeline";
import Banner from "./Banner/Banner";
import Foods from "./Foods/Foods";
import Contact from "./Contact/Contact";

const Home = () => {
const{loading}=useContext(AuthContext)

    
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
   
{/* banner */}
      <Banner></Banner>
<Helmet><title>FoodNeT/Home</title></Helmet>

{/* Foods */}

<Foods></Foods>
    
      {/* timeline */}

      <Timeline></Timeline>
      {/* team */}

      <div id="team">
        <Team></Team>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
