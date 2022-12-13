import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "../styles/styles.css";
import Login from "./Login";

const Header = ({ cart, setCart, clear, del, totalQ, totalPrice }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img
                alt="react-img"
                src="/img/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Kwick E-Mart
            </Navbar.Brand>
          </Link>

          <div className="d-flex">
            <span>
              <Cart
                cart={cart}
                setCart={setCart}
                clear={clear}
                del={del}
                totalQ={totalQ}
                totalPrice={totalPrice}
              />
            </span>
            <Link className="mx-3" to={"/login"}>
              <Button>Login</Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
