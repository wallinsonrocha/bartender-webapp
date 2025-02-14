import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="home-content">
          <h1>Experiência em Cada Gole</h1>          
          <div className="home-links">
            <Link href="/drinks">Ver Drinks</Link>
            <Link href="/bartenders">Conheça os Bartenders</Link>
          </div>
        </div>
      </section>
    </>
  );
}
