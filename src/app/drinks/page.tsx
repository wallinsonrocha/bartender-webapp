import './style.css';
import { productList } from '../../../public/data/drinks';
import Drink from '@/components/drink/drink-display';

export default function DrinkPage() {
  return (
    <>
      <section id="area-results">
        {
          productList.map(p => {
            return (
              <Drink id={p.id}
                key={p.id}
                name={p.name}
                stars={p.stars}
                valorH={p.valorH}
                image={p.image}
                shortDesc={p.shortDesc}
              />
            )
          })
        }
      </section>     
    </>
  );
}
