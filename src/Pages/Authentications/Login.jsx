import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/vecteezy_login-concept-with-security-username-and-password-people_.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/Authproviders";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import google from "../../assets/images/google.png";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser, user, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    const user = { email, password };
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate('/')
        e.target.reset();

        setUser(result.user);
        navigate(from, { replace: true });
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
    console.log(user);
  };
  //   google

  const HandleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });
        toast.success("Login Successfully");
        console.log(user);
        //  return location.reload()
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
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
              Login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleRegister} className="space-y-3">
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
              <button className="w-full">
                {" "}
                <input
                  className="border-2 border-purple-500 rounded-xl px-3 py-2 w-full"
                  type="submit"
                  value="SignUp"
                />
              </button>
            </div>
          </form>
          <div className="mx-auto">
            <button
              className="flex gap-4 justify-center items-start px-3 py-2 text-xl rounded-xl border-2 w-full mt-2 border-rose-600"
              onClick={HandleGoogle}
            >
              <img className="h-6" src={google} alt="" /> Login With Google
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/register"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              SignUp First
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

export default Login;
