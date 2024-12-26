import Header from "@/components/header";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <div className="home-content">
            <h1>Titulo H1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis. Risus sed imperdiet ac porttitor arcu mauris neque scelerisque purus. Placerat netus risus sed nisi etiam.
            </p>
            <div className="home-links">
              <a href="">Produtos</a>
              <a href="">Bartenders</a>
            </div>
          </div>

          <Image
            src='/images/image.jpg'
            width={400}
            height={400}
            alt=""
          />
        </section>
      </main>
    </>
  );
}
