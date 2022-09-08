import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Main = () => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header />
      <Landing />
      <Footer />
    </Container>
  );
};

export default Main;
