import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })

      .catch((error) => {
        console.alert(error.messege);
      });
  };

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <div className="name__logo">
            <h1>📋Docket</h1>
          </div>
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
              style={{
                width: "80%",
                marginTop: "5px",
                justifyContent: "center",
              }}
            >
              Login
            </button>
          </form>
          <div>
            <button
              type="submit"
              onClick={signUp}
              className="login__signInButton"
              style={{
                color: "blue",
                width: "80%",
                marginTop: "10px",
                justifyContent: "center",
                background: "lightGreen",
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
