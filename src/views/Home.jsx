import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import NavBar from "../components/navBar/NavBar";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";

const Home = () => {
  const { pizza } = useContext(ApiContext);

  const filtrarPizza = pizza.filter((pizza) => {
    const pizzaName = pizza.name.toLowerCase().trim();
    const excludedPizzas = ["bacon", "pollo picante"].map((name) =>
      name.toLowerCase()
    );
    return !excludedPizzas.includes(pizzaName);
  });

  return (
    <>
      <NavBar />
      <Banner />
      <div className="container">
        <Card pizza={filtrarPizza} />
        <Link to={`/carro`} className="btn btn-primary mr-2">
          Ver Carro
        </Link>
      </div>
    </>
  );
};

export default Home;
