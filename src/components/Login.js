import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:4000";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [formTouch, setFormTouch] = useState(false);
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setFormTouch(true);
  };
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let loginResponse = await response.json();
    if (loginResponse.success) {
      localStorage.setItem("token", loginResponse.authToken);
      navigate("/");
      props.showAlert("You Are SuccessFully Logged In", "success");
    }
    else{
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center p-2">
      <form
        className="p-5 border rounded my-2"
        method="post"
        style={{ width: "40vw" }}
        onSubmit={handleLogin}
      >
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        {formTouch && (
          <div id="emailHelp" className="form-text">
            {credentials.email === "" ? (
              <p className="text-danger lh-1">&#10006;Email Can't Be Blank!!</p>
            ) : (
              <p></p>
            )}
            {credentials.password === "" ? (
              <p className="text-danger lh-1">
                &#10006;Password Can't Be Blank!!
              </p>
            ) : (
              <p></p>
            )}
            {!(credentials.password.length >= 6) ? (
              <p className="text-danger lh-1">
                &#10071;Password Should be of Minimum 6 Characters!!
              </p>
            ) : (
              <p></p>
            )}
          </div>
        )}
        <button
          disabled={
            credentials.password.length < 6 ||
            credentials.email === "" ||
            credentials.password === ""
          }
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
