import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import CheckOut from "../components/CheckOut";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import NothingHere from "../components/NothingHere";
import ProductDetailContainer from "../components/ProductDetailContainer";

const Main = ({ add, cart, clear, del }) => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header cart={cart} clear={clear} del={del} />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<ProductDetailContainer add={add} />} path="/products/:id" />
        <Route element={<About />} path="/about" />
        <Route element={<CheckOut />} path="/checkout" />
        <Route element={<NothingHere />} path="*" />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
