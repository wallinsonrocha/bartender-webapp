import './style.css';
import DrinkDetail from '@/components/drink/drink-screen';
import { DrinkProduct, productList } from '../../../../../public/data/drinks';

interface InfoParams {
  params: {
    id: string;
  };
}

export default function BartenderPage({ params }: InfoParams) {
  const drink: DrinkProduct | undefined = productList.find(
    (b) => b.id === Number(params.id)
  );

  if (!drink) {
    return (
      <div>
        <h2>Produto não encontrado!</h2>
        <p>Por favor, verifique o ID na URL.</p>
      </div>
    );
  }

  return (
    <DrinkDetail
      id={drink.id}
      name={drink.name}
      valorH={drink.valorH}
      stars={drink.stars}
      shortDesc={drink.shortDesc}      
      description={drink.description} />
  );
}
