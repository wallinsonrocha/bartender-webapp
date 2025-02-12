import './style.css';
import Bartender from "@/components/bartender/bartender-display";
import { bartenderList } from '../../../public/data/bartenders';

export default function BartenderPage() {
  return (
    <>
      <section id="area-results">
        {
          bartenderList.map(b => {
            return (
              <Bartender id={b.id}
                key={b.id}
                name={b.name}
                image={b.image}
                stars={b.stars}
                valorH={b.valorH}
                shortDesc={b.shortDesc}
              />
            )
          })
        }
      </section>
    </>
  );
}
