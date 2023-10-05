import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import axios from "../api/axios";
const LOGIN_URL = "/api/users/login";

// import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "./Button";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), { headers: { "Content-Type": "application/json" } });
      // const response = await axios.post(LOGIN_URL, JSON.stringify(email, password), { headers: { "Content-Type": "application/json" }, withCredentials: true });
      const accessToken = response?.data?.accesstoken;
      // const roles = response?.data?.roles;
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      console.log(accessToken);

      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage(error);
      errRef.current.focus();
    }
  };

  return (
    <section className="login-page">
      <p ref={errRef} areia-live="assertive">
        {errorMessage}
      </p>

      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required style={{ borderRadius: "4px" }} />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} required style={{ borderRadius: "4px" }} />
        </Form.Group>

        <Form.Group className="mb-4" style={{ display: "flex", justifyContent: "right" }}>
          <p style={{ color: "#007CB0" }}>Forgot Password ?</p>
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
    </section>
  );
};

export default Login;
