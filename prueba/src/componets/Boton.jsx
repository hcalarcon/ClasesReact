//componente para empezar a dar estilos
//importar mi modulo de ccs
//style es un objeto de estilos
import style from "../styles/Boton.module.css";

function Boton() {
  console.log("render del boton");
  return (
    <button className={style.boton}>
      Soy <span className={style.span}>un</span> boton
    </button>
  );
}

export default Boton;
