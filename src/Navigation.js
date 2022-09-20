import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CSSnavigation from "./CSSnavigation.css";
function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Scrapyard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
