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

{
  /* <Link className="mx-2 " to={"/login"}>
  <Button
    variant={auth.user !== "" ? "outline-success" : "outline-danger"}
    className="fs-2 m-0 p-0"
  >
    {auth.user === "" ? "Login" : "🚪"}
  </Button>
</Link> */
}
