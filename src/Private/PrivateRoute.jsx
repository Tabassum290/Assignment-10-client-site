import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
      if(user && user?.email){
     return children;
      }
      if(loading){
        return <Loader/>;
      }
      return (
          <Navigate to={'/login'} state={location.pathname}></Navigate>
      );
        };


export default PrivateRoute;