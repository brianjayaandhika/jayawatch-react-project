import React from "react";
import Footer from "../Footer/Footer";
import "./LoginPage.css";
import { Button, Form } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <div className="login-bg login-page">
        <div className="login-bubble">
          <h1 style={{ marginBottom: "24px" }}>Sign In</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control type="text" placeholder="Username" style={{ marginBottom: "24px" }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" style={{ marginBottom: "24px" }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" style={{ color: "white" }} />
            </Form.Group>
            <button className="signIn-btn login-btn">Sign In</button>
          </Form>
          <button className="signUp-btn login-btn">Sign Up</button>
          <p className="login-help-text">Need help?</p>
        </div>

        {/* Footer Section */}
        <div className="footer-section login-footer">
          <Footer />
        </div>
        {/* End of Footer Section */}
      </div>
    </>
  );
};

export default LoginPage;
