import Image from 'next/image';
export default function Home() {
  return (
    <>
      <section id="home">
        <div className="home-content">
          <h1>Experiência em Cada Gole</h1>          
          <div className="home-links">
            <a href="/drinks">Ver Drinks</a>
            <a href="/bartenders">Conheça os Bartenders</a>
          </div>
        </div>
      </section>
    </>
  );
}
