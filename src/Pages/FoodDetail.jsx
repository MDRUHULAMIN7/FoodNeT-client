import { useContext, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProviders/Authproviders";
import { Helmet } from "react-helmet";

const FoodDetail = () => {
  const foods = useLoaderData();
  const { id } = useParams();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const detailFood = foods.find((food) => food._id === id);

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
  } = detailFood;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const locationState = useLocation();
  const from = locationState.state || "/";
  const { email } = user;

  const handleFoodReq = async (e) => {
    e.preventDefault();

    if (email === donatoremail) {
      setError('You cannot request this food.');
      return;
    }

    const updateFood = {
      donatorname,
      donatoremail,
      donateamount: e.target.donateamount.value,
      donatorphoto,
      name,
      useremail: email,
      image,
      quantity,
      location,
      date,
      foodstatus: "requested",
      additonalnotes: e.target.notes.value,
      requestdate: e.target.requestdate.value,
    };

    try {
      const response = await fetch(`https://foodnet-server.vercel.app/foods/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateFood),
      });
      const data = await response.json();
      if (data.modifiedCount > 0) {
        setSuccess("Requested Successfully");
        navigate(from, { replace: true });
      } else {
        setError("Request failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>FoodNet - Food Details</title>
      </Helmet>

      <div className="container mx-auto p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="lg:w-1/2">
            <img className="w-full h-full object-cover" src={image} alt={name} />
          </div>

          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img className="h-16 w-16 rounded-full" src={donatorphoto} alt={donatorname} />
                <div>
                  <h2 className="text-xl font-semibold">{donatorname}</h2>
                  <p className="text-gray-600">{donatoremail}</p>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4">{name}</h1>
              <p className="text-lg text-gray-700 mb-2">Location: {location}</p>
              <p className="text-lg text-gray-700 mb-4">Expire Date: {date}</p>

              <div className="mb-4">
                <p className="text-lg font-semibold">Food Status: {foodstatus}</p>
                <p className="text-lg font-semibold">Quantity: {quantity}</p>
              </div>

              <p className="text-gray-700 mb-6">{additonalnotes}</p>

              <button
                className="w-full bg-rose-600 text-white py-2 rounded-lg font-semibold hover:bg-rose-700"
                onClick={() => document.getElementById("my_modal_4").showModal()}
              >
                Request For The Food
              </button>

              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-full max-w-lg">
                  <h2 className="text-2xl font-semibold mb-4">Request For Food</h2>
                  {error && <p className="text-red-600 mb-4">{error}</p>}
                  {success && <p className="text-green-600 mb-4">{success}</p>}

                  <form onSubmit={handleFoodReq} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name:</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          readOnly
                          value={name}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Food Image:</label>
                        <input
                          id="image"
                          type="text"
                          name="image"
                          readOnly
                          value={image}
                          className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Food Quantity:</label>
                        <input
                          id="quantity"
                          type="number"
                          name="quantity"
                          readOnly
                          value={quantity}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Pickup Location:</label>
                        <input
                          id="location"
                          type="text"
                          name="location"
                          readOnly
                          value={location}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Expire Date:</label>
                        <input
                          id="date"
                          type="date"
                          name="date"
                          readOnly
                          value={date}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="foodstatus" className="block text-sm font-medium text-gray-700">Food Status:</label>
                        <input
                          id="foodstatus"
                          type="text"
                          name="foodstatus"
                          readOnly
                          value={foodstatus}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="requestdate" className="block text-sm font-medium text-gray-700">Request Date:</label>
                        <input
                          id="requestdate"
                          type="date"
                          name="requestdate"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="donateamount" className="block text-sm font-medium text-gray-700">Donate Amount:</label>
                        <input
                          id="donateamount"
                          type="number"
                          name="donateamount"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes:</label>
                        <input
                          id="notes"
                          type="text"
                          name="notes"
                          defaultValue={additonalnotes}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-rose-600 text-white py-2 rounded-lg font-semibold hover:bg-rose-700"
                    >
                      Submit Request
                    </button>
                  </form>

                  <div className="modal-action">
                    <button className="btn btn-primary" onClick={() => document.getElementById("my_modal_4").close()}>Close</button>
                  </div>
                </div>
              </dialog>
            </div>

            <Link to={`/showall`} className="block mt-4">
              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
                Back to Food List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
