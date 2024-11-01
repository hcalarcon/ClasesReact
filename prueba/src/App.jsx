import Estados from "./clases/estados";
import PrimerasClases from "./clases/PrimerasClases";
import Boton from "./componets/Boton";

//otra forma de declarar un componente
const App = () => {
  return (
    <>
      <Boton />
      <Estados />
    </>
  );
};

export default App;
