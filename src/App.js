import { lazy, Suspense, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Registration";
import PrivateRoute from "./components/PrivateRoute";

const DashBoard = lazy(() => import("./pages/DashBoard"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on initial load
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        {/* Render NavBar only when user is logged in */}
        {isLoggedIn && <NavBar />}
        
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute element={Home} />} />
          <Route path="/dashboard" element={<PrivateRoute element={DashBoard} />} />
          <Route path="/shop" element={<PrivateRoute element={Shop} />} />
          <Route path="/shop/:id" element={<PrivateRoute element={Product} />} />
          <Route path="/cart" element={<PrivateRoute element={Cart} />} />
        </Routes>

        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
