import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="Footer">
    <div className="copyright">
      &copy; {(new Date()).getFullYear()} Bryan Paronto. All Rights Reserved
    </div>
    <nav className="footer-nav">
      <ul className="pull-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer