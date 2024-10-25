//Vamos a crear un componente que recibe una propiedad y dependiendo del valor de la propiedad renderiza distintas cosas.

function RenderIf(props) {
  //desestructurar props --render es boolean
  const { edad } = props;

  //evaluar render

  if (edad > 17) {
    return <p>sos mayor, tu edad es: {edad}</p>;
  } else {
    return <p>sos menor</p>;
  }
}

export default RenderIf;
