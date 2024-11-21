import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // for navigation after registration
import axios from 'axios';  // Import axios for HTTP requests
import "../Register/Registration.css"

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Hook for navigation after registration

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple validation for fields
    if (!name || !email || !phone || !address || !gender || !password || !confirmPassword) {
      setLoading(false);
      setError("Please fill in all fields.");
      return;
    }

    // Password mismatch validation
    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match.");
      return;
    }

    // Send registration data to the backend
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        phone,
        address,
        gender,
        password,
      });

      // Handle successful registration
      setLoading(false);
      navigate("/login");  // Redirect to login after successful registration
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <Container className="registration-page">
      <div className="registration-box">
        <h2>Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAddress" className="mt-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGender" className="mt-3">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
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
          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
        <div className="links">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
