import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarC() {
  const styleActive = ({ isActive }) => {
    return {
      color: isActive ? "#0d6efd" : "white",
      textDecoration: isActive ? "underline" : "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <Navbar expand="lg" className="shadow bg-body-tertiary">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-dark bg-white"
        />
        <Navbar.Collapse id="basic-navbar-nav bg-success">
          <Nav className="me-auto pt-4">
            <NavLink className="mb-2 pe-3" style={styleActive} to="/">
              Inicio
            </NavLink>

            <NavLink to="/ultimos" style={styleActive}>
              Historial
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
