import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/api/users/login";

// import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "./Button";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (error) {
      console.log(error);
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="login-page">
          <p ref={errRef} areia-live="assertive">
            {errMsg}
          </p>

          <h1>Login</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required style={{ borderRadius: "4px" }} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} required style={{ borderRadius: "4px" }} />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
        </section>
      )}
    </>
  );
};

export default Login;
