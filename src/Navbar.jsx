// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
          <FaTelegram />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="logo">
          <img src="https://www.figma.com/file/e76WnDWdgGQ5BIsFquOska/image/b08c3bbbf49ee60f8a5df2f81285d0a2ab6a61e3" alt="Logo" />
        </div>

      <div className="nav-box">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#ielts">IELTS & PTE</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

        <button className="login-btn">Login</button>
      </nav>

        <img src="https://www.figma.com/file/e76WnDWdgGQ5BIsFquOska/image/a3e156d2c3fcfd46170af834948db61c6f536491" alt="Error" className="image1"/>

    </header>

  );
};

export default Navbar;
