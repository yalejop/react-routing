import { useParams } from "react-router-dom";

const ComponenteParametros = (props) => {
  const { palabra, color, bg } = useParams();

  return (
    <div>
      {isNaN(palabra) ? (
        <h1 style={
            //si existe color
            color ? {color: color, backgroundColor: bg} : null
        }>La palabra es: {palabra}</h1>
      ) : (
        <h1>El Número es: {palabra}</h1>
      )}
    </div>
  );
};

export default ComponenteParametros;
