import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Solid Waste at CCNY  <span> Educational OutReach Initiative</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/review/new">Review</Link>
          </li>
        </ul>
      </aside>
    </header>
  )
}

export default Navbar;