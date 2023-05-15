import React, { useContext, useEffect, useState } from "react";
import "../styles/loginPage.css";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const { auth, login, logout } = useContext(AuthContext);

  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const [errorFields, setErrorFields] = useState({
    username: "",
    password: "",
    loginError: "",
  });

  const isFormValid = (fieldName, fieldValue) => {
    const tempError = { username: "", password: "" };

    switch (fieldName) {
      case "username":
        if (fieldValue === "") tempError.username = "Invalid Username";
        break;

      case "password":
        if (fieldValue === "") tempError.password = "Invalid Password";
        break;
      default:
        break;
    }

    setErrorFields(tempError);
  };

  const handleChange = (event) => {
    setFormFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    isFormValid(event.target.name, event.target.value);
  };

  const isValid = () => {
    if (Object.values(errorFields).every((data) => data === "")) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid()) {
      console.log("error");
      return;
    }

    // Compare data with local storage and redirect to HomePage
    const user = JSON.parse(localStorage.getItem("userData"));
    !user &&
      setErrorFields((prev) => ({
        ...prev,
        loginError: "Username does not exist",
      }));

    if (
      user.username === formFields.username &&
      user.password === formFields.password
    ) {
      // setAuth Context
      login();
    } else {
      setErrorFields((prev) => ({
        ...prev,
        loginError: "Username and Password does not match",
      }));
    }
  };

  return (
    <form
      className={`login-container theme-${theme}`}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <h1 className={`theme-${theme}`}>Sign In</h1>
      <div className="login-inputs">
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Email or Phone Number"
          onChange={handleChange}
        />
        {errorFields.username && (
          <p className="text-red-600 p-2">{errorFields.username}</p>
        )}
        <input
          id="password"
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errorFields.password && (
          <p className="text-red-600 p-2">{errorFields.password}</p>
        )}
      </div>
      <button>Sign In</button>
      {errorFields.loginError && (
        <p className="text-red-600 p-2">{errorFields.loginError}</p>
      )}
      <div className="forgot-password">Forgot Password?</div>
      <div className="sign-up-link mt-32 text-center">
        New to MoviesClone?
        <a className="cursor-pointer font-bold"> Sign Up now </a>
      </div>
    </form>
  );
};
