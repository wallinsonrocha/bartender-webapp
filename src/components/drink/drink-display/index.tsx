import Link from "next/link";
import Star from "../../star";
import "./style.css"

type propsType = {
  id: number;
  name: string;
  valorH: number;
  image: string;
  stars: number;
  shortDesc: string;

}

export default function Drink(props: propsType) {

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} className="drink-product-container">
      <img src={props.image} alt="Bebida" />
      <h3>{props.name}</h3>
      <div className="drink-product-star-price">
        <div className="drink-product-stars flex">
          {stars.map((_, index) => (
            <Star key={`${props.name}-${index}`} index={`${props.name}-${index}`} />
          ))}
        </div>
        <p>Preço: R$ {props.valorH.toFixed(2).replace( ".", ",")}</p>
      </div>
      <p>{props.shortDesc}</p>
      <Link href={`../drinks/${props.id}`}>Ver mais</Link>
    </div>
  );
}
