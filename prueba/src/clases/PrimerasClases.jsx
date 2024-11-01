import Boton from "../componets/Boton";
import RenderIf from "../componets/RenderIf";

const PrimerasClases = () => {
  let admin = true;
  let user = "Jose";
  return (
    <>
      {/* Paso las propiedades al componente */}
      {/* Renderizar */}
      {/* <Saludo name="juan" />
      <Saludo name="susana" />
      <Saludo name="lola" />
      <Saludo name="pablo" /> */}

      <h2>Renderizado condicional</h2>
      <p>Render con if</p>
      {/* Si se cumple una condicion se renderiza algo en el dom */}
      <RenderIf edad={19} />

      <p className="">Operadores ternarios</p>
      {/* condicion ? verdad : falso */}
      {!admin ? <p>Is admin</p> : <p>No is admin</p>}

      <p>Operador &&</p>
      {/* Concateno la condicion con lo que quiero que se cumple si es verdadero */}
      {user && <p>Hola {user}</p>}

      <p>Operador OR ||</p>
      {<p>Estas navegando como {!user || "invitado"}</p>}

      <p>Renderizar boton</p>
      <Boton />
    </>
  );
};

export default PrimerasClases;
