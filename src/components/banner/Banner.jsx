import PizzaImg from "../../assets/img/pizza-b.jpg";

const Banner = () => {
  return (
    <div className="mx-4">
      <div className="banner-container">
        <div
          className="image-overlay"
          style={{ backgroundImage: `url(${PizzaImg})` }} 
        ></div>
        <div className="container-fluid text-overlay">
          <div className="row">
            <div className="col">
              <div className=" text-center p-3">
                <h2>¡Pizzeria Mamma Mia!</h2>
                <p>Tenemos las mejores pizzas que podras encontrar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;