import React from "react";
import { Navbar } from "react-bootstrap";
import { FaCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="nest-divider mb-3">
        <div className="divider"></div>
        <div className="divider"></div>
      </div>
      <Navbar.Brand href="/" className="header-brand">
        JayaWatch
      </Navbar.Brand>
      <p className="d-flex justify-content-center align-items-center">
        <FaCopyright /> 2023, Muhammad Brianjaya Andhika
      </p>
    </>
  );
};

export default Footer;
