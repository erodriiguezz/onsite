import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/api/users/login";

import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "./Button";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), { headers: { "Content-Type": "application/json" } });
      // const response = await axios.post(LOGIN_URL, JSON.stringify(email, password), { headers: { "Content-Type": "application/json" }, withCredentials: true });
      const accesstoken = response?.data?.accesstoken;
      // const roles = response?.data?.roles;

      console.log(accesstoken);
      setAuth({ email, password, accesstoken });
    } catch (err) {
      console.log(err);
      errRef.current.focus();
    }
  };

  return (
    <>
      <section className="login-page">
        <Alert variant="danger" ref={errRef} areia-live="assertive" style={{ display: "none" }}>
          {errMsg}
        </Alert>

        <h1>Login</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required />
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          </Form.Group>

          <Button type="submit">Login</Button>
        </Form>
      </section>
    </>
  );
};

export default Login;
