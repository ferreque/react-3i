import { Container } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../components/About";
import CheckOut from "../components/CheckOut";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import NothingHere from "../components/NothingHere";
import ProductDetailContainer from "../components/ProductDetailContainer";
import Login from "../components/Login";
import { useEffect } from "react";
import SignUp from "../components/SingUp";

const Main = ({
  add,
  cart,
  setCart,
  clear,
  del,
  totalQ,
  totalPrice,
  auth,
  setAuth,
  login,
  logout,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (login && window.location.href === "http://localhost:3000/login") {
      navigate("/");
    }
  }, [login]);

  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header
        cart={cart}
        clear={clear}
        del={del}
        totalQ={totalQ}
        setCart={setCart}
        totalPrice={totalPrice}
        auth={auth}
        logout={logout}
      />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route
          element={<ProductDetailContainer add={add} auth={auth} />}
          path="/products/:id"
        />
        <Route element={<About />} path="/about" />

        <Route
          element={
            auth.user !== "" ? (
              <CheckOut
                cart={cart}
                totalPrice={totalPrice}
                auth={auth}
                setCart={setCart}
                del={del}
              />
            ) : (
              <Login auth={auth} setAuth={setAuth} login={login} />
            )
          }
          path="/checkout"
        />
        <Route
          element={<Login auth={auth} setAuth={setAuth} login={login} />}
          path="/login"
        />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<NothingHere />} path="*" />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
