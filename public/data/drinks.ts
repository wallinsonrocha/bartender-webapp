export interface DrinkProduct {
  id: number;
  name: string;
  stars: number;
  valorH: number;
  shortDesc: string;
  description: string;
  objective: string;
  challenges: string;
}

export const productList: DrinkProduct[] = [
  { 
    id: 1, 
    name: 'Carla', 
    stars: 5, 
    valorH: 150, 
    shortDesc: "Bartender experiente com mais de 10 anos de atuação.", 
    description: "Carla é uma bartender altamente qualificada, com vasta experiência em mixologia e um histórico comprovado de criar coquetéis inovadores. Sua dedicação à arte de bartending é evidente em cada bebida que prepara.", 
    objective: "Proporcionar uma experiência única e memorável através de coquetéis bem elaborados e um atendimento excepcional.", 
    challenges: "Lidar com demandas altas durante eventos e manter a qualidade do serviço em ambientes movimentados." 
  },
  { 
    id: 2, 
    name: 'Daniel', 
    stars: 4, 
    valorH: 120, 
    shortDesc: "Especialista em coquetéis clássicos e modernos.", 
    description: "Daniel possui uma paixão por mixologia e tem a habilidade de criar tanto coquetéis clássicos quanto modernos com perfeição. Ele está sempre em busca de novas tendências para surpreender seus clientes.", 
    objective: "Criar coquetéis que não apenas satisfaçam, mas também encantem os clientes, oferecendo uma experiência de bar diferenciada.", 
    challenges: "Acompanhar as tendências rápidas da mixologia e adaptar-se às preferências variadas dos clientes." 
  },
  { 
    id: 3, 
    name: 'Érick', 
    stars: 4, 
    valorH: 130, 
    shortDesc: "Mixologista com habilidades avançadas em decoração de drinks.", 
    description: "Érick é conhecido por suas habilidades excepcionais em decorar drinks, transformando cada coquetel em uma obra de arte. Sua atenção aos detalhes faz com que cada bebida seja visualmente impressionante.", 
    objective: "Impressionar os clientes com drinks que são tanto visualmente deslumbrantes quanto deliciosos.", 
    challenges: "Manter a consistência na apresentação dos drinks durante períodos de alta demanda." 
  },
  { 
    id: 4, 
    name: 'Fernanda', 
    stars: 4, 
    valorH: 140, 
    shortDesc: "Bartender especializada em coquetéis tropicais.", 
    description: "Fernanda traz a energia e o sabor dos trópicos para cada drink que prepara. Seus coquetéis tropicais são famosos por serem refrescantes e deliciosos, perfeitos para qualquer ocasião.", 
    objective: "Levar o espírito tropical aos clientes através de coquetéis autênticos e saborosos.", 
    challenges: "Encontrar os ingredientes frescos necessários para manter a autenticidade dos coquetéis tropicais." 
  },
  { 
    id: 5, 
    name: 'Gabriel', 
    stars: 4, 
    valorH: 125, 
    shortDesc: "Perito em harmonização de coquetéis com comidas.", 
    description: "Gabriel é um bartender que entende a importância da harmonização entre comida e bebida. Ele possui um talento especial para criar coquetéis que complementam perfeitamente os pratos servidos.", 
    objective: "Oferecer uma experiência gastronômica completa, onde cada coquetel realça o sabor dos pratos servidos.", 
    challenges: "Criar harmonizações que agradem a uma variedade de paladares e dietas." 
  },
  { 
    id: 6, 
    name: 'Helena', 
    stars: 4, 
    valorH: 135, 
    shortDesc: "Especialista em coquetéis artesanais e destilados.", 
    description: "Helena é uma entusiasta de coquetéis artesanais e destilados. Ela tem um conhecimento profundo sobre diferentes tipos de bebidas espirituosas e como utilizá-las para criar coquetéis únicos.", 
    objective: "Criar coquetéis artesanais que destaquem a qualidade dos destilados utilizados.", 
    challenges: "Manter a qualidade artesanal dos coquetéis enquanto atende a um grande número de pedidos." 
  }
];
