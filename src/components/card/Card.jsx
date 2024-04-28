import React, { useContext } from "react";
import { CarroContext } from "../../context/CarroContext";
import VerMasButton from "../verMasBoton/VerMasBoton";
import AgregarBoton from "..//agregarBoton/AgregarBoton";

const Card = ({ pizza }) => {
  const { agregarAlCarro } = useContext(CarroContext);

  const agregarCarro = (pizza) => {
    agregarAlCarro(pizza);
    console.log("Pizza agregada al carro:", pizza);
  };

  return (
    <>
      <div className="row">
        {pizza.map((pizza, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              {/* imagen para el card */}
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                {/*primera letra en mayuscula */}
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
                {/* precio */}
                <p className="card-text">Precio: ${pizza.price}</p>
                <VerMasButton pizzaName={pizza.name} />
                <AgregarBoton onClick={() => agregarCarro(pizza)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
