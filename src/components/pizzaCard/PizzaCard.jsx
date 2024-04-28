import AgregarBoton from "../agregarBoton/AgregarBoton";

const PizzaCard = ({ pizza }) => {


  const agregarCarro=()=> {
    console.log("agrego al carro");
  }

  return (
    <div className="card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
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
      </div>
    </div>
  );
};

export default PizzaCard;
