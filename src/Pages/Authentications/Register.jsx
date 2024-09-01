import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/vecteezy_login-concept-with-security-username-and-password-people_.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/Authproviders";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import axios from "axios";

const Register = () => {
  const [RegisterError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photo.value;
    const password = e.target.password.value;
    setRegisterError("");
    
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should include an uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should include a lowercase character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const userEmail = result.user?.email;
        const loggedUser = { email: userEmail };
        
        if (result.user) {
          axios.post('https://foodnet-server.vercel.app/jwt', loggedUser, { withCredentials: true })
            .then(() => {
              // Token handling if necessary
            });
          
          e.target.reset();
          navigate(from, { replace: true });
          toast.success("Registered successfully");

          updateUserProfile(name, image);
          setUser({ ...result?.user, photoURL: image, displayName: name });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration failed");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-8 lg:py-12">
          <div className="flex justify-center mb-6">
            <img className="w-32" src={logo} alt="Logo" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Register with Email</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-700">Username:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Full Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Photo URL:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Photo URL"
                type="text"
                name="photo"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Email:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email Address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="space-y-2 relative">
              <label className="block text-gray-700">Password:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div>
              <input
                className="bg-purple-500 text-white rounded-lg px-4 py-2 w-full cursor-pointer hover:bg-purple-600 transition"
                type="submit"
                value="Sign Up"
              />
            </div>

            {RegisterError && (
              <div className="text-red-500 font-bold text-center">
                <p>{RegisterError}</p>
              </div>
            )}
          </form>

          <div className="flex items-center justify-center mt-4">
            <Link
              to="/login"
              className="text-sm text-gray-500 uppercase hover:underline"
            >
              or sign in
            </Link>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
