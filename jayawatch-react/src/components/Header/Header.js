import "./Header.css";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import axios from "axios";

const Header = ({ display }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [usernameID, setUsernameID] = useState("");

  const handleIsLogin = () => {
    localStorage.getItem("SID") ? setIsLogin(true) : setIsLogin(false);
  };

  // Delete Session ID
  const deleteSession = () => {
    alert("You have logged out!");
    localStorage.removeItem("SID");
    setIsLogin(false);
    axios({
      method: "post",
      url: `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
      data: {
        session_id: sessionID,
      },
    });
  };

  useEffect(() => {
    handleIsLogin();

    // Fetch account details
    if (isLogin) {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_APIKEY}&session_id=${sessionID}`,
      }).then(function (response) {
        setUsernameID(response.data.username);
      });
    }
  });

  const sessionID = localStorage.getItem("SID");

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Container className="pb-3">
          <Navbar.Brand href="/" className="header-brand">
            JayaWatch
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="header-nav me-auto">
              <Nav.Link href="/" className="header-link header-link-home" style={{ display: display }}>
                Home
              </Nav.Link>
              <Nav.Link href="/movie" className="header-link header-link-trending">
                Movies
              </Nav.Link>
            </Nav>
            <div className="forLogin">
              {isLogin ? (
                <NavDropdown title={usernameID} id="nav-dropdown">
                  <NavDropdown.Item onClick={deleteSession}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <a href="/login" className="login-header">
                  Login
                </a>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
