import React, { useContext } from "react";
import "./Header.css";
import { MdDarkMode, MdSunny, MdOutlinePersonOutline } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const { theme, onChangeTheme } = useTheme();
  const { isAuth, logout } = useAuth();

  return (
    <header>
      <div className="header-container flex justify-between">
        <div className="logo">
          <img src="../film-icon.png" alt="logo" />
          <p>MoviesClone</p>
        </div>

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

          {isAuth && (
            <button onClick={logout} className="signIn-btn m-8 flex gap-2">
              Logout
              <MdOutlinePersonOutline fill="white" size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
