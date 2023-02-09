import "./Header.css";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} variant="dark">
          <Container>
            <Navbar.Brand href="#" className="header-brand">
              JayaWatch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="header-nav me-auto">
                  <Nav.Link href="#" className="header-link header-link-home" style={{ display: "none" }}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#trending-section" className="header-link header-link-trending">
                    Trending Movies
                  </Nav.Link>

                  <NavDropdown title="Genre" id={`offcanvasNavbarDropdown-expand-${expand}`}>
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
                <button className="btn btn-login ">Login</button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
