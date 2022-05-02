import React from 'react'
import "./Navbar.css";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className='logo'>
      <img src={logo} alt="" />
      </div>

      <div className='title'>
        <h1>
          <Link to="/">
            Solid Waste at CCNY <br /> <span> Educational OutReach Initiative</span>
          </Link>
        </h1>
      </div>

      <div className='links'>
        <ul>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/review/new">Review</Link>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Navbar;