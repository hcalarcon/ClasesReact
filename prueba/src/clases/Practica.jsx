import { useState } from "react";

const Practica = () => {
  console.log("render");
  const [count, setCount] = useState(5);
  let contador = 0;
  const Boton = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  function Sumar() {
    setCount(count + 1);
    contador = contador + 1;
    console.log(contador);
  }

  return (
    <>
      <p>{count}</p>
      <Boton text="sumar" onClick={Sumar} />
    </>
  );
};

export default Practica;
