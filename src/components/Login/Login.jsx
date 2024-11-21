import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authToken", "example_token");
      navigate("/home"); // Redirect to the home page
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <Container className="login-page">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} className="text-center">
          <div className="login-box">
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleLogin}
                className="mt-4"
                block
              >
                Login
              </Button>
            </Form>
            <div className="links mt-3">
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
              <br />
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








// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simple authentication logic
//     if (username === "admin" && password === "admin") {
//       localStorage.setItem("authToken", "example_token");
//       navigate("/home"); // Redirect to the home page
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

