import React, { useContext } from "react";
import "./Header.css";
import { MdDarkMode, MdSunny, MdOutlinePersonOutline } from "react-icons/md";
<<<<<<< HEAD
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { theme, onChangeTheme } = useTheme();
  const { isAuth, logout } = useAuth();
=======
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const { auth, logout } = useContext(AuthContext);
>>>>>>> a9a40e8 (bug fix : Logout)
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout()) navigate("/", { replace: true });
  };

  const handleLogoLink = () => {
    if (isAuth) return navigate("/home", { replace: true });
    handleLogout();
  };

  const handleLogout = () => {
    if (logout()) navigate("/", { replace: true });
  };

  return (
    <header>
      <div className="header-container flex">
        <a className="logo" onClick={handleLogoLink}>
          <img src="../film-icon.png" alt="logo" />
          <p>MoviesClone</p>
        </a>

        <div className="login-btn flex align-middle">
          {theme === "light" ? (
            <button
              className="dark-btn cursor-pointer m-3"
              onClick={onChangeTheme}
            >
              <MdDarkMode fill="black" size={30} />
            </button>
          ) : (
            <button className="light-btn cursor-pointer m-3">
              <MdSunny fill="white" size={30} onClick={onChangeTheme} />
            </button>
          )}

<<<<<<< HEAD
          {isAuth && (
=======
          {auth && (
>>>>>>> a9a40e8 (bug fix : Logout)
            <button
              onClick={handleLogout}
              className="signIn-btn m-8 flex gap-2"
            >
              Logout
              <MdOutlinePersonOutline fill="white" size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
