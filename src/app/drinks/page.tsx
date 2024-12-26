"use client";
import './style.css';
import Header from "@/components/header";
import { useState } from "react";
import { DrinkProduct, productList } from '../../../public/data/drinks';
import DrinkDetail from '@/components/drink-screen';
import Drink from '@/components/drink';

export default function DrinkPage() {
  const [selectedDrink, setSelectedDrink] = useState<DrinkProduct | null>(null);
  // Função utilizada para pegar os dados e colocar em product Screen de acordo com o Id
  const handleButtonClick = (id: number) => {
    const product = productList.find(p => p.id === id);
    setSelectedDrink(product || null);
  };
  // Para limpar o useState e fechar a tela de dados.
  const handleClose = () => {
    setSelectedDrink(null);
  };

  return (
    <>
      <Header />
      <main>
        <section id="area-results">
          {
            productList.map(p => {
              return (
                <Drink id={p.id}
                  key={p.id}
                  name={p.name}
                  stars={p.stars}
                  valorH={p.valorH}
                  shortDesc={p.shortDesc}
                  onButtonClick={handleButtonClick}
                />
              )
            })
          }
        </section>
        {/* Screen Bartender details */}
        {selectedDrink && (
          <DrinkDetail
            id={selectedDrink.id}
            name={selectedDrink.name}
            valorH={selectedDrink.valorH}
            stars={selectedDrink.stars}
            shortDesc={selectedDrink.shortDesc}
            onClose={handleClose}
            objective={selectedDrink.objective}
            challenges={selectedDrink.challenges}
            description={selectedDrink.description}/>
        )}
      </main>
    </>
  );
}
