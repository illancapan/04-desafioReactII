import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import PizzaCard from '../components/pizzaCard/PizzaCard';
import NavBar from "../components/navBar/NavBar";
import Banner from "../components/banner/Banner";

const Pizza = () => {
  const { pizzaName } = useParams(); 
  const { pizza } = useContext(ApiContext);

  const selectedPizza = pizza.find(pizza => pizza.name === pizzaName);
  
  if (!selectedPizza) {
    return <div>No se encontró la pizza.</div>;
  }

  return (
    <>
      <NavBar />
      <Banner />
      <div className="row">
        <div className="col">
          <PizzaCard pizza={selectedPizza} />
        </div>
      </div>
    </>
  );
};

export default Pizza;