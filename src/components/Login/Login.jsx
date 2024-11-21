import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "../Login/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setLoading(true); // Set loading to true

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      // Log the response to check the structure
      console.log(response);

      // Ensure the token is in the expected format
      if (response && response.data && response.data.token) {
        localStorage.setItem("authToken", response.data.token); // Store the JWT token
        setLoading(false); // Reset loading state
        navigate("/home"); // Redirect to the home page
      } else {
        setLoading(false); // Reset loading state
        setError("Invalid username or password!"); // Set error
      }
    } catch (err) {
      setLoading(false); // Reset loading state
      console.error("Login error:", err); // Log error to console for debugging
      setError("Error logging in, please try again later.");
    }
  };

  return (
    <Container className="login-page">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <div className="login-box">
            <h2 className="text-center">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>} {/* Error display */}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                className="mt-4"
                block
                disabled={loading} // Disable button when loading
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>
            <div className="links mt-3 text-center">
              {/* <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
              <br /> */}
              <a href="/register" className="register">
                New Registration
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
