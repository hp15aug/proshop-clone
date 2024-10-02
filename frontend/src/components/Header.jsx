import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="fs-8 fw-bold d-flex"> <img src={logo} alt="logo" className="d-flex" /> <span className="pt-2 pl-1">ProShop</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex">
              <Nav.Link href="/cart" className="d-flex align-items-center">
                <FaShoppingCart className="me-2" />
                Cart
              </Nav.Link>
              <Nav.Link href="/login" className="d-flex align-items-center">
                <FaUser className="me-2" />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;