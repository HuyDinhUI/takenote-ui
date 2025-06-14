import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authorizedAxiosInstance from "../utils/axios";
import { ClimbingBoxLoader } from "react-spinners";
import { useAuth0 } from "@auth0/auth0-react";

const override = {
  display:"block",
  position: "absolute",
  top:"40%",
  left:"50%",
  transform:"translate(-50%;-50%)"
  
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      const checkLogin = async () => {
        try {
          const res = await authorizedAxiosInstance.get(
            "http://localhost:5024/v1/account/info"
          );

          if (res.data) {
            setAuth(true);
          } else {
            setAuth(false);
          }
        } catch (error) {
          setAuth(false);
        }
      };

      checkLogin();
    } else {
      setAuth(true);
    }
  }, []);

  if (auth === null) return <ClimbingBoxLoader cssOverride={override} size={15} />;

  if (!auth) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
