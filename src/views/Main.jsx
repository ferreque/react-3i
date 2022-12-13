import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import CheckOut from "../components/CheckOut";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import NothingHere from "../components/NothingHere";
import ProductDetailContainer from "../components/ProductDetailContainer";
import Login from "../components/Login";

const Main = ({
  add,
  cart,
  setCart,
  clear,
  del,
  totalQ,
  totalPrice,
  isValidated,
  setIsValidate,
  validate,
}) => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header
        cart={cart}
        clear={clear}
        del={del}
        totalQ={totalQ}
        setCart={setCart}
        totalPrice={totalPrice}
      />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<ProductDetailContainer add={add} />} path="/products/:id" />
        <Route element={<About />} path="/about" />

        <Route
          element={
            isValidated ? (
              <CheckOut cart={cart} totalPrice={totalPrice} isValidated={isValidated} />
            ) : (
              <Login
                isValidated={isValidated}
                setIsValidate={setIsValidate}
                validate={validate}
              />
            )
          }
          path="/checkout"
        />
        <Route
          element={
            <Login
              isValidated={isValidated}
              setIsValidate={setIsValidate}
              validate={validate}
            />
          }
          path="/login"
        />
        <Route element={<NothingHere />} path="*" />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
