export interface DrinkProduct {
  id: number;
  name: string;
  stars: number;
  valorH: number;
  shortDesc: string;
  description: string;
}

export const productList: DrinkProduct[] = [
  {
    id: 1,
    name: 'Carla',
    stars: 5,
    valorH: 150,
    shortDesc: "Bartender experiente com mais de 10 anos de atuação.",
    description: "Carla é uma bartender altamente qualificada, com vasta experiência em mixologia e um histórico comprovado de criar coquetéis inovadores. Sua dedicação à arte de bartending é evidente em cada bebida que prepara.",
  },
  {
    id: 2,
    name: 'Daniel',
    stars: 4,
    valorH: 120,
    shortDesc: "Especialista em coquetéis clássicos e modernos.",
    description: "Daniel possui uma paixão por mixologia e tem a habilidade de criar tanto coquetéis clássicos quanto modernos com perfeição. Ele está sempre em busca de novas tendências para surpreender seus clientes.",
  },
  {
    id: 3,
    name: 'Érick',
    stars: 4,
    valorH: 130,
    shortDesc: "Mixologista com habilidades avançadas em decoração de drinks.",
    description: "Érick é conhecido por suas habilidades excepcionais em decorar drinks, transformando cada coquetel em uma obra de arte. Sua atenção aos detalhes faz com que cada bebida seja visualmente impressionante.",
  },
  {
    id: 4,
    name: 'Fernanda',
    stars: 4,
    valorH: 140,
    shortDesc: "Bartender especializada em coquetéis tropicais.",
    description: "Fernanda traz a energia e o sabor dos trópicos para cada drink que prepara. Seus coquetéis tropicais são famosos por serem refrescantes e deliciosos, perfeitos para qualquer ocasião.",
  },
  {
    id: 5,
    name: 'Gabriel',
    stars: 4,
    valorH: 125,
    shortDesc: "Perito em harmonização de coquetéis com comidas.",
    description: "Gabriel é um bartender que entende a importância da harmonização entre comida e bebida. Ele possui um talento especial para criar coquetéis que complementam perfeitamente os pratos servidos.",
  },
  {
    id: 6,
    name: 'Helena',
    stars: 4,
    valorH: 135,
    shortDesc: "Especialista em coquetéis artesanais e destilados.",
    description: "Helena é uma entusiasta de coquetéis artesanais e destilados. Ela tem um conhecimento profundo sobre diferentes tipos de bebidas espirituosas e como utilizá-las para criar coquetéis únicos.",
  }
];
