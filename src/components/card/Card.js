import "./card.css";
import Button from '../Button/Button';
    function Card(props) {
        const dataProduct = {
            name: "Whey Proteina",
            precio: "$"+200,
            img:"https://picsum.photos/200/300",
            description1: "Proteina de la mas alta calidad",
            description2: "80% de proteina",
        };
            return (
              <div className="card">
                <div className="card-img">
                  <img src={props.dataProduct.img} alt="imagen" />
                </div>
                <div className="card-detail">
                  <h2>{props.dataProduct.description1}</h2>
                  <p>{props.dataProduct.description2}</p>
                  <h3>{props.dataProduct.precio}</h3>
                 <Button text="Ver mas"/>
                </div>
              </div>
            );
          }
export default Card;