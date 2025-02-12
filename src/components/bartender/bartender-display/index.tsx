import Link from "next/link";
import Star from "../../star";
import "./style.css"
import Image from "next/image";

type propsType = {
  id: number;
  name: string;
  valorH: number;
  stars: number;
  shortDesc: string;
  image: string;
}

export default function Bartender(props: propsType) {

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} className="bartender-container">
      <Image src={props.image} alt="Image Bartender" width={320} height={320} />
      <h3>{props.name}</h3>
      <div className="bartender-star-price">
        <div className="bartanter-stars flex">
          {stars.map((_, index) => (
            <Star key={`${props.name}-${index}`} index={`${props.name}-${index}`} />
          ))}
        </div>
        <p>Valor hora: R$ {props.valorH}</p>
      </div>
      <p>{props.shortDesc}</p>
      <Link href={`../bartenders/${props.id}`}>Ver mais</Link>
    </div>
  );
}
