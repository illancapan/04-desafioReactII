import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarroContext } from "../../context/CarroContext";
import AgregarBoton from "../agregarBoton/AgregarBoton";

const PizzaCard = ({ pizza }) => {
  const { agregarAlCarro } = useContext(CarroContext);

  const agregarCarro = () => {
    agregarAlCarro(pizza);
    console.log("Pizza agregada al carro:", pizza);
  };

  return (
    <div className="container-fluid w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="card m-4">
        <div className="row">
          {/* Columna de la imagen */}
          <div className="col mx-auto">
            <img
              src={pizza.img}
              className="card-img-top h-100"
              alt={pizza.name}
            />
          </div>
          {/* Columna del contenido */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
              </h5>
              <p className="card-text">{pizza.desc}</p>
              <h6>Ingredientes:</h6>
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p className="card-text">Precio: ${pizza.price}</p>
              <AgregarBoton onClick={agregarCarro} />
              {/* Enlace para ver el carro */}
              <Link to="/carro" className="btn btn-primary">
                Ver Carro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
