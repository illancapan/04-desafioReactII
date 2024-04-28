import { Link } from "react-router-dom";

const VerMasBoton = ({pizzaName}) => {
  return (
    <>
      <Link to={`/pizza/${pizzaName}`} className="btn btn-primary mr-2">
        Ver Más
      </Link>
    </>
  );
};

export default VerMasBoton;
