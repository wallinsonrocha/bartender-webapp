export interface DrinkProduct {
  id: number;
  name: string;
  stars: number;
  valorH: number;
  image: string;
  shortDesc: string;
  description: string;
}

export const productList: DrinkProduct[] = [
  {
    id: 1,
    name: 'Cognac',
    stars: 5,
    valorH: 150,
    image: "/images/drinks/1.jpg",
    shortDesc: "A sofisticação em cada gota.",
    description: "Um clássico atemporal, o Cognac é a personificação da elegância. Envelhecido em barris de carvalho, revela notas de baunilha, caramelo e frutas secas, proporcionando uma experiência rica e refinada. Ideal para quem aprecia o luxo nos detalhes.",
  },
  {
    id: 2,
    name: 'Champagne',
    stars: 4,
    valorH: 120,
    image: "/images/drinks/2.jpg",
    shortDesc: "Brinde a momentos inesquecíveis.",
    description: "Sinônimo de celebração, o Champagne encanta com suas borbulhas delicadas e sabor sofisticado. Notas frutadas e florais se combinam em uma explosão de frescor, tornando cada gole um convite ao prazer e à exclusividade.",
  },
  {
    id: 3,
    name: 'Vermouth',
    stars: 4,
    valorH: 130,
    image: "/images/drinks/3.jpg",
    shortDesc: "A alma dos coquetéis icônicos.",
    description: "Versátil e aromático, o Vermouth é o toque de requinte em qualquer drink. Seu perfil equilibrado entre ervas, especiarias e um leve dulçor o torna indispensável para clássicos como o Negroni e o Manhattan. Uma escolha para paladares sofisticados.",
  },
  {
    id: 4,
    name: 'Amarone della Valpolicella',
    stars: 4,
    valorH: 140,
    image: "/images/drinks/4.jpg",
    shortDesc: "Intensidade e elegância em um só rótulo.",
    description: "Produzido com uvas passificadas, o Amarone della Valpolicella entrega uma explosão de sabor e corpo encorpado. Suas notas de frutas vermelhas, chocolate e especiarias criam uma experiência única para quem busca potência e sofisticação em um vinho.",
  },
  {
    id: 5,
    name: 'Grand Marnier',
    stars: 4,
    valorH: 125,
    image: "/images/drinks/5.jpg",
    shortDesc: "O equilíbrio perfeito entre doçura e intensidade.",
    description: "Um licor premium que combina o requinte do conhaque com a vivacidade da laranja amarga. Grand Marnier é perfeito para ser degustado puro, em coquetéis sofisticados ou como um toque especial em sobremesas requintadas.",
  },
  {
    id: 6,
    name: 'Sauternes',
    stars: 4,
    valorH: 135,
    image: "/images/drinks/6.jpg",
    shortDesc: "O ouro líquido da França.",
    description: "Este vinho de sobremesa é uma joia rara, elaborado a partir de uvas botritizadas que conferem uma doçura elegante e complexidade inigualável. Notas de mel, damasco e baunilha tornam cada gole uma experiência memorável.",
  }
];
