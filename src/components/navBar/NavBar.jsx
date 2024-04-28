import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarroContext } from '../../context/CarroContext';

function NavBar() {
  const { carro } = useContext(CarroContext);

  // Calcular la cantidad total de pizzas en el carrito
  const totalPizzas = carro.reduce((total, pizza) => {
    // Asegurarse de que tanto price como quantity sean números válidos
    const pizzaPrice = typeof pizza.price === 'number' ? pizza.price : 0;
    const pizzaQuantity = typeof pizza.quantity === 'number' ? pizza.quantity : 0;
    // Sumar el precio de la pizza multiplicado por la cantidad
    return total + (pizzaPrice * pizzaQuantity);
  }, 0);

  return (
    <>
      <div className="mx-4">
        <nav className="navbar bg-info">
          <div className="container-fluid">
            <Link to={`/`} className="navbar-brand ps-4">
              Pizzeria Mamma Mia!
            </Link>
            <span className="navbar-brand pe-4">
              ${totalPizzas.toFixed(2)}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
