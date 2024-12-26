import Star from "../star";
import "./style.css"
import Image from "next/image";

type propsType = {
  id: number;
  name: string;
  valorH: number;
  stars: number;
  shortDesc: string;
  onButtonClick: (id: number) => void;
}

export default function Bartender(props: propsType) {

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} className="bartender-container">
      <Image src="https://picsum.photos/id/10/300/200" alt="Image Bartender" width={320} height={320} />
      <h3>{props.name}</h3>
      <div className="bartender-star-price">
        <div className="bartanter-stars">
          {stars.map((_, index) => (
            <Star index={index} />
          ))}
        </div>
        <p>Valor hora: R$ {props.valorH}</p>
      </div>
      <p>{props.shortDesc}</p>
      <button onClick={() => props.onButtonClick(props.id)}>Ver mais</button>
    </div>
  );
}