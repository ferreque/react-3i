import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Card className="border-0 bg-primary rounded-0 py-5">
      <Card.Body>
        <Card.Title as="h1" className="text-white text-center">
          Hola, somos Kweck E-Mart
        </Card.Title>
        <Card.Text className="text-white text-center">
          Estamos listos para desarrollar tu pagina web!
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center ">
          <Link to={"/about"}>
            <Button variant="light">
              <span className="font-weight-bolder" size="lg">
                CONOZCA MAS
              </span>
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Hero;
