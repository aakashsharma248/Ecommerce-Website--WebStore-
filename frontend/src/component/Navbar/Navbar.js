import React, { useState, useEffect } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const handleResize = () => {
    if (window.innerWidth > 999) {
      setShowMediaIcons(false);
    } 
  }
  const toggleMenu = () => {
    setShowMediaIcons((prev) => !prev);
  };

  return (
    <>
      <nav className={`main-nav ${showMediaIcons ? "mobile-menu-open" : ""}`}>
        <img src={logo} alt="Ecommerce" height={100} className="logo" />

        <div className={`menu-link ${showMediaIcons ? "mobile-menu-link" : ""}`}>
          <ul>
            <li>
              <NavLink to="/"  onClick={() => setShowMediaIcons((prev) => !prev)} style={{fontSize: 24}} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={() => setShowMediaIcons((prev) => !prev)} style={{fontSize: 24}}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons((prev) => !prev)} style={{fontSize: 24}}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons((prev) => !prev)} style={{fontSize: 24}}>About</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <IconButton
                aria-label="search"
                color="inherit"
                onClick={() => history.push("/search")}
              >
                <SearchIcon style={{ fontSize: 30 }} />
              </IconButton>
            </li>
            <li>
              <IconButton
                aria-label="account"
                color="inherit"
                onClick={() => history.push("/account")}
              >
                <AccountCircle style={{ fontSize: 30 }} />
              </IconButton>
            </li>
            <li>
              <IconButton
                aria-label="cart"
                color="inherit"
                onClick={() => history.push("/cart")}
              >
                <ShoppingCartIcon style={{ fontSize: 30 }} />
              </IconButton>
            </li>
          </ul>

          <div className={`hamburger-menu`}>
            <a href="#" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
