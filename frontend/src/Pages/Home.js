import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:4000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("Login successful!");
        navigate("/notes");
      }
    });
  };

  return (
    <div className="homeContainer">
      <div className="loginDiv">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input className="btn" type="submit" value="Login" onClick={login} />
        </div>
      </div>
    </div>
  );
};

export default Home;
