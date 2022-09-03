const Landing = ({ sumarUno, restarUno }) => {
  return (
    <div>
      <button onClick={() => sumarUno()}>Sumar</button>
      <button onClick={() => restarUno()}>Restar</button>
    </div>
  );
};

export default Landing;
