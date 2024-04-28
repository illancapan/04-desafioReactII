import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CarroContext } from '../context/CarroContext';

const Carro = () => {
  const { carro } = useContext(CarroContext);
  return (
    <div>
      Carro
      <Link to={`/`} className="btn btn-primary mr-2">
        Volver al home
      </Link>
      <h1>Carro</h1>
      <ul>
        {carro.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - ${pizza.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carro;
