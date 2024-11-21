import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
  const authToken = localStorage.getItem("authToken");

  // If no authToken is found, redirect to login page
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return <Element />;
};

export default PrivateRoute;
