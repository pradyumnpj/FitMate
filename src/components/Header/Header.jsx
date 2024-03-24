import React, { useState, useEffect } from "react";
import "./Header.css";
import Bars from "../../assets/bars.png";
import CloseIcon from "../../assets/close-icon.png";
import { Link as ScrollLink } from "react-scroll"; // Rename the import alias to ScrollLink
import { Link as RouterLink } from "react-router-dom"; // Rename the import alias to RouterLink

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <RouterLink to="/" className="heading">
        Hawk
      </RouterLink>

      {mobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          <img
            src={menuOpen ? CloseIcon : Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      )}

      {(!mobile || menuOpen) && (
        <ul className="header-menu">
          <li>
            <RouterLink
              to="/"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
              activeClass={true}
            >
              Home
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/trainers"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Trainers
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/register"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </RouterLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
