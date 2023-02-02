import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="header-brand ">JayaWatch</Navbar.Brand>
          <Nav className="header-nav me-auto">
            <Nav.Link href="#popular" className="header-link">
              Recommended
            </Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
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
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
