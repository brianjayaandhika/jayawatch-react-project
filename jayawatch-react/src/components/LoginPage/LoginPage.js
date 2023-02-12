import React from "react";
import Footer from "../Footer/Footer";
import "./LoginPage.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // GET Session ID using Login - used on Login Page
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`,
      })
        .then(function (response) {
          const request_token = response.data.request_token;
          axios({
            method: "post",
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
            data: {
              username: values.username,
              password: values.password,
              request_token: request_token,
            },
          })
            .then(function (response) {
              console.log(response.data);
              axios({
                method: "post",
                url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
                data: {
                  request_token: request_token,
                },
              })
                .then(function (response) {
                  const session_id = response.data.session_id;
                  alert(`Joining with session_id: ${session_id}`);
                  if (session_id) {
                    navigate("/");
                    localStorage.setItem("SID", session_id);
                  }
                })
                .catch(function (error) {
                  alert(error.message);
                });
            })
            .catch(function (error) {
              alert(error.message);
            });
        })
        .catch(function (error) {
          alert(error.message);
        });
    },
  });

  return (
    <>
      <div className="login-bg login-page">
        <div className="login-bubble">
          <h1 style={{ marginBottom: "24px" }}>Sign In</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Control required type="text" placeholder="Username" style={{ marginBottom: "24px" }} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control required type="password" placeholder="Password" style={{ marginBottom: "24px" }} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            </Form.Group>
            <Button type="submit" className="login-btn">
              Sign In
            </Button>
          </Form>
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
