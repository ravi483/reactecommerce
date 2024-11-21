import { lazy, Suspense } from "react";
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
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<PrivateRoute component= {Home } />} />
          <Route path="/dashboard" element={<PrivateRoute component={DashBoard} />}/>
          <Route path="/shop" element={<PrivateRoute component= {Shop } />} />
          <Route path="/shop/:id" element={<PrivateRoute component= {Product } />} />
          <Route path="/cart" element={<PrivateRoute component= {Cart } />} />
          <Route path="/shop" element={<PrivateRoute> <Shop /></PrivateRoute>
          } 
        />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
