import './style.css';
import Bartender from "@/components/bartender";
import { bartenderList } from '../../../public/data/bartenders';

const handleButtonClick = (id: number) => console.log("Navegar até a página")

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
                stars={b.stars}
                valorH={b.valorH}
                shortDesc={b.shortDesc}
                // onButtonClick={handleButtonClick}
              />
            )
          })
        }
      </section>
    </>
  );
}
