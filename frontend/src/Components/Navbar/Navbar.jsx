import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="Nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Sellverse</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        ><Link to = "/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to = "/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        ><Link to = "/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        ><Link to = "/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" height="50px" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
