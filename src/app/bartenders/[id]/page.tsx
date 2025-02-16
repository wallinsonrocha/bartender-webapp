import BartenderDetail from "@/components/bartender/bartender-detail";
import { bartenderList, BartenderPerson } from '../../../../public/data/bartenders';

interface InfoParams {
  params: {
    id: string;
  };
}

export default function BartenderPage({ params }: InfoParams) {
  const bartender: BartenderPerson | undefined = bartenderList.find(
    (b) => b.id === Number(params.id)
  );

  if (!bartender) {
    return (
      <div>
        <h2>Bartender não encontrado!</h2>
        <p>Por favor, verifique o ID na URL.</p>
      </div>
    );
  }

  return (
    <section>
      <BartenderDetail
        id={bartender.id}
        name={bartender.name}
        valorH={bartender.valorH}
        stars={bartender.stars}
        image={bartender.image}
        shortDesc={bartender.shortDesc}
        objective={bartender.objective}
        challenges={bartender.challenges}
        description={bartender.description}
      />
    </section>
  );
}
