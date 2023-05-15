import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="bg-transparent">
      <div className={`footer-container theme-${theme}`}>
        <div className="footer-questions">Questions? Call 1-844-505-2993</div>
        <div className="footer-links flex">
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Terms of Use</li>
            <li>
              <div className="flex gap-2">
                <button>
                  <img src="facebook.svg" alt="facebook" />
                </button>
                <button>
                  <img src="instagram.svg" alt="instagram" />
                </button>
                <button>
                  <img src="twitter.svg" alt="twitter" />
                </button>
                <button>
                  <img src="youtube.svg" alt="youtube" />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className={`footer-language theme-${theme}`}>
          <select className="language bg-transparent">
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
      </div>
    </footer>
  );
};
