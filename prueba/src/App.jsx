import Saludo from "./componets/Saludo";

//otra forma de declarar un componente
const App = () => {
  return (
    <>
      {/* Paso las propiedades al componente */}
      <Saludo name="juan" />
      <Saludo name="susana" />
      <Saludo name="lola" />
      <Saludo name="pablo" />
    </>
  );
};

export default App;
