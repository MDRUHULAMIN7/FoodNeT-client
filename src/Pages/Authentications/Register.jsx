import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/vecteezy_login-concept-with-security-username-and-password-people_.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/Authproviders";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import axios from "axios";

const Register = () => {
  const [RegisterError, setRegistererror] = useState("");
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
    setRegistererror("");
    if (password.length < 6) {
      setRegistererror("password should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistererror("password should be a Uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegistererror("password should be a Lowercase character");
      return;
    }

    // const user = { name, email, image, password };
    createUser(email, password)
      .then((result) => {
        const userEmail =  result.user?.email;
        const loggedUser={email:userEmail};
        if(result.user){
       
          axios.post('https://foodnet-server.vercel.app/jwt',loggedUser,{withCredentials:true})
          .then(() =>{
            // console.log('token access',res.data);
          })
        }
        e.target.reset();
      
        navigate(from, { replace: true });
        toast.success("Register Succesgully");

        updateUserProfile(name, image);
        setUser({ ...result?.user, photoURL: image, displayName: name })
       
      
        setUser(result.user);

      return
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
    // console.log(user);
  };

  return (
    <div className="flex justify-center items-center lg:mt-10 mt-5 min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-12 " src={logo} alt="" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              Register with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleRegister} className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="">UserName:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="FullName"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="">Photo:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="photourl"
                type="text"
                name="photo"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="">email:</label>
              <br />
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="email"
                type="email"
                name="email"
              />
            </div>
            <Helmet
            > <title>FoodNeT/Register</title></Helmet>
            <div className="space-y-2 relative">
              <label htmlFor="">Password:</label>
              <br />
              <input
                className="border-2  border-purple-500 rounded-xl px-3 py-2 w-full"
                placeholder="password"
                type={showPassword ? "text" : "password"}
                name="password"
              />
              <span
                className="absolute top-1/2 right-6"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <div>
              <input
                className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                type="submit"
                value="SignUp"
              />
            </div>

            <div className="w-full text-red-500 font-bold">
              <p>{RegisterError}</p>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
