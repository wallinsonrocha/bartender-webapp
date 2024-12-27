"use client";
import './style.css';
import Header from "@/components/header";
import Bartender from "@/components/bartender";
import BartenderDetail from "@/components/bartender-detail";
import { useState } from "react";
import { BartenderPerson, bartenderList } from '../../../public/data/bartenders';

export default function BartenderPage() {
  const [selectedBartender, setSelectedBartender] = useState<BartenderPerson | null>(null);
  // Função utilizada para pegar os dados e colocar em Bartender Screen de acordo com o Id
  const handleButtonClick = (id: number) => {
    const bartender = bartenderList.find(b => b.id === id);
    setSelectedBartender(bartender || null);
  };
  // Para limpar o useState e fechar a tela de dados.
  const handleClose = () => {
    setSelectedBartender(null);
  };

  return (
    <>
      <Header />
      <main>
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
                  onButtonClick={handleButtonClick}
                />
              )
            })
          }
        </section>
        {/* Screen Bartender details */}
        {selectedBartender && (
          <BartenderDetail
            id={selectedBartender.id}
            name={selectedBartender.name}
            valorH={selectedBartender.valorH}
            stars={selectedBartender.stars}
            shortDesc={selectedBartender.shortDesc}
            onClose={handleClose}
            objective={selectedBartender.objective}
            challenges={selectedBartender.challenges}
            description={selectedBartender.description} />
        )}
      </main>
    </>
  );
}
