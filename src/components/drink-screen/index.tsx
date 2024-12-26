import Star from '../star';
import './style.css';

type DrinkDetailProps = {
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

export default function DrinkDetail(props: DrinkDetailProps) {
  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} id="drink-product-screen">
      <div id="drink-product-detail" className='drinkActive'>
        <button onClick={props.onClose}>Cancel</button>
        <div className='drink-product-detail__container'>
          <img src='/images/image.jpg' alt="" />
          <div className="drink-product-container">
            <h3>{props.name}</h3>
            <div className="drink-product-star-price">
              <div style={{ display: 'flex' }}>
                {stars.map((_, index) => (
                  <Star index={index} />
                ))}
              </div>
              <p>Preço: R$ {props.valorH.toFixed(2).replace(".", ",")}</p>
            </div>
            <div>
              <p>
                {props.description}
              </p>
            </div>
            <div className="drink-product__qnt">
              <div className='qnt__button'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" /></svg>
                </button>
                <p>1</p>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg>
                </button>
              </div>
              <p className='qnt__price'>20,00</p>
            </div>

            <button>Adicionar no carrinho</button>
          </div>
        </div>
      </div>
    </div>

  );
}
