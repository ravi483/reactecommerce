import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use local state to manage login status
  const navigate = useNavigate(); // Hook for navigation

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authToken from localStorage
    setIsLoggedIn(false); // Update the local state
    navigate("/login"); // Redirect to login page
  };

  // Fixed Header Scroll Handler
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Check if the user is logged in by looking for the authToken in localStorage
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Only run once when the component mounts

  return (
    <Navbar fixed="top" expand="md" className={isFixed ? "navbar fixed" : "navbar"}>
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          <ion-icon name="bag"></ion-icon>
          <h1 className="logo">Multimart</h1>
        </Navbar.Brand>

        {/* Media cart and toggle */}
        <div className="d-flex">
          <div className="media-cart">
            <Link
              aria-label="Go to Cart Page"
              to="/cart"
              className="cart"
              data-num={cartList.length}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="nav-icon"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setExpand(!expand);
            }}
          />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className="navbar-link"
                to="/Home"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>


            <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Cart Page"
                className="navbar-link"
                to="/cart"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Cart</span>
              </Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Link
                aria-label="Go to Dashboard Page"
                className="navbar-link"
                to="/DashBoard"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Dashboard</span>
              </Link>
            </Nav.Item> */}

            {isLoggedIn && (
              <Nav.Item>
                {/* Render Logout Button only if the user is logged in */}
                <button type="button" className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
