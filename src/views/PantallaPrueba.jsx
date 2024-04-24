import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const PantallaPrueba = () => {
  const pizzas = useContext(ApiContext);

  return (
    <div>
      <h1>Pantalla Prueba</h1>
      <div>
        {pizzas.map((pizza, index) => (
          <div key={index}>
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p>Precio: ${pizza.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PantallaPrueba;