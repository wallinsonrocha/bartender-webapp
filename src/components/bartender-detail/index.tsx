import Image from 'next/image';
import Star from '../star';
import './style.css';

type BartenderDetailProps = {
  id: number;
  name: string;
  valorH: number;
  stars: number;
  shortDesc: string;
  description: string;
  objective: string;
  challenges: string;
  onClose: () => void;
}

export default function BartenderDetail(props: BartenderDetailProps) {
  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} id="bartender-screen">
      <div id="bartender-detail" className='bartenderActive'>
        <button onClick={props.onClose}>Cancel</button>
        <div className='bartender-detail__container'>
          <div className='bartender-detail__content'>
            <Image src="https://picsum.photos/id/10/300/200" alt="Image Bartender" width={0} height={0} layout='responsive' style={{objectFit: "cover"}} />
            <div>
              <h3>Objetivo</h3>
              <p>
                {props.objective}
              </p>
            </div>

            <div>
              <h3>DESAFIOS</h3>
              <p>
                {props.challenges}
              </p>
            </div>
          </div>
          <div className="bartender-container">
            <h3>{props.name}</h3>
            <div className="bartender-star-price">
              <div className="bartanter-stars">
                {stars.map((_, index) => (
                  <Star index={index} />
                ))}
              </div>
              <p>Valor hora: R$ {props.valorH}</p>
            </div>
            <div>
              <p>
                {props.description}
              </p>
            </div>

            <a href="#">Entrar em contato</a>
          </div>
        </div>
      </div>
    </div>

  );
}
