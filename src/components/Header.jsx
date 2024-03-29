import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Cart from "./Cart";
import "../styles/styles.css";

const Header = ({ cart, setCart, clear, del, totalQ, totalPrice, auth, logout }) => {
  const navegate = useNavigate();
  const authOk = () => {
    return auth.user !== "";
  };
  const handleClick = () => {
    authOk() ? logout() : navegate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
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
            <Link to={"/admin"} variant={"outline-success"} className="fs-2 mx-2 p-0">
              {auth.rol === "ADMIN_ROLE" ? "ADMIN" : null}
            </Link>
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
            <Button
              onClick={() => handleClick()}
              variant={authOk() ? "outline-danger" : "outline-success"}
              className="fs-2 mx-2 p-0"
            >
              {authOk() ? auth.user : "login"}
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
