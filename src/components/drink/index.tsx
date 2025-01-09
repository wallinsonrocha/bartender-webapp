import Star from "../star";
import "./style.css"

type propsType = {
  id: number;
  name: string;
  valorH: number;
  stars: number;
  shortDesc: string;
  onButtonClick: (id: number) => void;
}

export default function Drink(props: propsType) {

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} className="drink-product-container">
      <img src='/images/image.jpg' alt="" />
      <h3>{props.name}</h3>
      <div className="drink-product-star-price">
        <div className="drink-product-stars">
          {stars.map((_, index) => (
            <Star key={`${props.name}-${index}`} index={`${props.name}-${index}`} />
          ))}
        </div>
        <p>Preço: R$ {props.valorH.toFixed(2).replace( ".", ",")}</p>
      </div>
      <p>{props.shortDesc}</p>
      <button onClick={() => props.onButtonClick(props.id)}>Ver mais</button>
    </div>
  );
}
