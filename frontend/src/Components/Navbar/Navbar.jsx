import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="Nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Sellverse</p>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""  height="50px"/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
