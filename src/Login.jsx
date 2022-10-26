import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (email === "" || password === "") {
      alert("please enter login credentials");
    } else {
      const userDetails = JSON.parse(
        JSON.stringify(localStorage.getItem("userDetails"))
      );
      const isUserExists = JSON.parse(userDetails).filter(
        (user) => user.email === email || user.username === email
      );
      if (isUserExists.length) {
        if (isUserExists[0].password === password) {
          const newDetails = { email, password };
          setData({ ...newDetails });
          localStorage.setItem("currentUser", JSON.stringify(isUserExists[0]));
          navigate("/mainpage");
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("User not found");
      }
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={submitHandler} className="login-form">
          <input
            type="text"
            placeholder="Email"
            className="form-input"
            onChange={emailHandler}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            onChange={passwordHandler}
            value={password}
          />
          <button className="btn">LOGIN</button> <br />
          <Link to="register" className="link">
            New user register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
