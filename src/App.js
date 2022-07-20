import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { username, email, password, confirmPassword } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmith = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(data);
    } else {
      console.log("Passwords are not matching");
    }
  };

  return (
    <div className="App">
      <h1>SV SingUp</h1>
      <form onSubmit={onSubmith}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder="Confirm Password"
        />
        <br />
        <input type="submit" name="submit" />
        <br />
      </form>
    </div>
  );
}
