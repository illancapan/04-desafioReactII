import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/CarroContext";
import NavBar from "../components/navBar/NavBar";
import Banner from "../components/banner/Banner";

const Carro = () => {
  const { carro } = useContext(CarroContext);

  //  para almacenar la cantidad de pizzas
  const [cantidad, setCantidad] = useState(1);

  //  para aumentar y disminuir cantidad de pizzas
  const aumentarCantidad = () => {
    console.log("aun no aumenta")
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      // setCantidad(cantidad - 1);
      console.log("no disminuye")
    }
  };

  return (
    <>
      <NavBar />
      <Banner />
      <div className="container">
        <h1>Carro de Compras</h1>
        <Link to={`/`} className="btn btn-primary mb-2">
          Volver al inicio
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pizza</th>
              <th scope="col">Imagen</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carro.map((pizza, index) => (
              <tr key={index}>
                <td>{pizza.name}</td>
                <td>
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: "50px" }} 
                  />
                </td>
                <td>${pizza.price}</td>
                <td>{cantidad}</td> 
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={aumentarCantidad}
                  >
                    +
                  </button>
                  <span>{cantidad}</span>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={disminuirCantidad}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Carro;

