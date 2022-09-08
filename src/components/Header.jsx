import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Kwick E-Mart
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
