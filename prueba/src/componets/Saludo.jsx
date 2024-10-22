//nuestro primer componente
//los componente pueden recibir propiedades que denomimaos props
function Saludo({ name }) {
  //devuelve una vistar
  return <p>Hola, {name}</p>;
}

//exportamos la funcion - pueda ser usado en otro lugar
export default Saludo;
