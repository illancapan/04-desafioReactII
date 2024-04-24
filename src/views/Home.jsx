import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import NavBar from '../components/navBar/NavBar';
import Banner from '../components/banner/Banner'

const Home = () => {
  const pizzas = useContext(ApiContext);

  return (
    <>
<NavBar/>
<Banner />
        
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
    </>
  );
}

export default Home;