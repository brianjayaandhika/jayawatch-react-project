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
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_APIKEY}&session_id=${sessionID}`,
    }).then(function (response) {
      setUsernameID(response.data.username);
    });
  }, []);

  const sessionID = localStorage.getItem("SID");

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Container>
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

              <NavDropdown title="Genre" className="genre-dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                <NavDropdown.Item href="#animation">Animation</NavDropdown.Item>
                <NavDropdown.Item href="#anime">Anime</NavDropdown.Item>
                <NavDropdown.Item href="#biography">Biography</NavDropdown.Item>
                <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#crime">Crime</NavDropdown.Item>
                <NavDropdown.Item href="#documentary">Documentary</NavDropdown.Item>
                <NavDropdown.Item href="#drama">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#family">Family</NavDropdown.Item>
                <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#history">History</NavDropdown.Item>
                <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#musical">Musical</NavDropdown.Item>
                <NavDropdown.Item href="#mystery">Mystery</NavDropdown.Item>
                <NavDropdown.Item href="#romance">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#sci-fi">Sci-fi</NavDropdown.Item>
                <NavDropdown.Item href="#series">Series</NavDropdown.Item>
                <NavDropdown.Item href="#sport">Sport</NavDropdown.Item>
                <NavDropdown.Item href="#superhero">Superhero</NavDropdown.Item>
                <NavDropdown.Item href="#thriller">Thriller</NavDropdown.Item>
                <NavDropdown.Item href="#war">War</NavDropdown.Item>
              </NavDropdown>
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
