import { APP_ROUTE_PATH } from "../../routes/route-path";
import { Link } from "react-router-dom";
import { BiLogoProductHunt } from "react-icons/bi";
import "./header.style.css";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, [theme]);

  function changeTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <BiLogoProductHunt className="icon" />
          <h1>ortfolio</h1>
        </div>
        <div className="routes">
          <CiMenuBurger className="menu-icon" onClick={handleClick} />
          <div className="menu">
            <Link to={APP_ROUTE_PATH.ABOUT}>About</Link>
            <Link to={APP_ROUTE_PATH.PROJECTS}>Projects</Link>
            <Link to={APP_ROUTE_PATH.CONTACT}>Contact us</Link>
            <button className="mode" onClick={changeTheme}>
              {theme === "light" ? "dark" : "light"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="resposive-menu"
        style={{ display: clicked ? "block" : "none" }}
      >
        <div className="menu-wrapper">
          <Link to={APP_ROUTE_PATH.ABOUT}>About</Link>
          <Link to={APP_ROUTE_PATH.PROJECTS}>Projects</Link>
          <Link to={APP_ROUTE_PATH.CONTACT}>Contact us</Link>
          <button className="mode" onClick={changeTheme}>
            {theme === "light" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
