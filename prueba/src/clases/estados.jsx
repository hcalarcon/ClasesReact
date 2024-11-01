import { useState } from "react";

const Estados = () => {
  console.log("render del contador");
  let contador = 0;
  const [count, setCount] = useState(0);

  //boton reutilizable que muestra el texto "texto" y ejeucta la funcion "funcion"
  const Boton = ({ texto, funcion }) => {
    return <button onClick={funcion}>{texto}</button>;
  };

  //defino la funcion contar
  function contar() {
    setCount(count + 1);
    console.log(contador);
  }

  return (
    // Estas etiquetas se llaman frangment <p>
    <>
      <p>Estados</p>
      <p>Contador de click</p>
      <p>Es contador es: {count}</p>
      <Boton texto="Contar" funcion={contar} />
    </>
  );
};

export default Estados;
