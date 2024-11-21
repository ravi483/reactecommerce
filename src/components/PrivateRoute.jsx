import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem("authToken");

  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
