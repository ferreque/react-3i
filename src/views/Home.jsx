import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  const [contador, setContador] = useState(0);

  const sumarUno = () => {
    setContador(contador + 1);
  };
  const restarUno = () => {
    contador > 0 ? setContador(contador - 1) : setContador(0);
  };
  return (
    <>
      <Header />
      <Landing sumarUno={sumarUno} restarUno={restarUno} />
      <h3>{contador}</h3>
      <Footer />
    </>
  );
};

export default Home;
