import { useContext } from "react";
import { AuthContext } from "./Authproviders";
import { Navigate, useLocation } from "react-router-dom";
import { Grid } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
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
  if (user) return children;
  return (
    <Navigate to={"/login"} state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;
