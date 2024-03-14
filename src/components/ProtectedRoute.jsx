import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.isAuth);
  const isLoggedIn =
    localStorage.length > 0 ? localStorage.getItem("isLoggedIn") : false;
  let location = useLocation();

  if (!isAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
