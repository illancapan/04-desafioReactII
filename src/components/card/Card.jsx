import VerMasButton from '../verMasBoton/VerMasBoton';
import AgregarBoton from '..//agregarBoton/AgregarBoton';



const Card = ({ pizza }) => {
  
  
  const agregarCarro=()=> {
    console.log("agrego al carro");
  }
  
  
  return (
    <>
      <div className="row">
        {pizza.map((pizza, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              {/* imagen para el card */}
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                {/* Convertir la primera letra en mayúscula */}
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
                {/* Precio */}
                <p className="card-text">Precio: ${pizza.price}</p>
                <VerMasButton pizzaName={pizza.name} />
                <AgregarBoton onClick={agregarCarro} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
