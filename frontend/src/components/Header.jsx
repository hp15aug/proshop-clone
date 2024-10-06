import { Badge, Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../assets/logo.png";

const Header = () => {

  const {cartItems} = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-8 fw-bold d-flex"> <img src={logo} alt="logo" className="d-flex" /> <span className="pt-2 pl-1">ProShop</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex">
              <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
                <FaShoppingCart className="me-2" />
                Cart
                {
                  cartItems.length> 0 && (
                    <Badge pill bg="success" style={{marginLeft: "5px"}}>
                      {cartItems.reduce((a, c) => a+c.qty, 0)} 
                    </Badge>
                  )
                }
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
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