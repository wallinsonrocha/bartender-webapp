# Bartender

**Bartender** é uma aplicação web inovadora que conecta amantes de drinks com bartenders profissionais. Desenvolvida com o objetivo de explorar funcionalidades avançadas do Next.js, esta plataforma permite que os usuários comprem bebidas e contratem serviços de bartenders de forma prática e intuitiva.

## Objetivo

A aplicação **Bartender** é um mini-sistema onde os usuários podem:

- **Comprar drinks**: Selecione bebidas para festas, eventos ou momentos de descontração.
- **Contratar bartenders**: Encontre e contrate profissionais para coquetéis, eventos e mais.

O objetivo é proporcionar uma experiência completa tanto para clientes que buscam bebidas de qualidade quanto para bartenders que desejam oferecer seus serviços.

## Recursos

- **Interface Intuitiva e Responsiva**: Desenvolvida com Tailwind CSS para garantir uma experiência agradável em qualquer dispositivo.
- **Navegação Avançada com Next.js**: Utilização de Parallel Routes para a criação de modais e uma navegação dinâmica.
- **Gerenciamento de Estado Eficiente**: Implementado com Zustand para um gerenciamento fluido do carrinho de compras.
- **Type Safety**: Uso de TypeScript para garantir robustez e manutenção facilitada do código.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React para renderização do lado do servidor e construção de aplicações escaláveis.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática e melhora a qualidade do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Zustand**: Biblioteca para gerenciamento de estados de forma simples e eficaz.
- **Parallel Routes (Next.js)**: Para a implementação de modais e rotas paralelas, permitindo uma experiência de usuário dinâmica.

## Instalação

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

### Passos para Instalação

1. **Clone o Repositório**

   ```bash
   git clone git@github.com:wallinsonrocha/bartender-webapp.git
   cd bartender-webapp
   ```

2. **Instale as Dependências**

   Com **npm**:
   ```bash
   npm install
   ```
   Ou com **yarn**:
   ```bash
   yarn install
   ```

## Execução do Projeto

### Modo de Desenvolvimento

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
```
Ou com yarn:
```bash
yarn dev
```

Acesse a aplicação através do endereço: [http://localhost:3000](http://localhost:3000)

### Build e Produção

1. **Gerar Build de Produção**

   ```bash
   npm run build
   ```
   Ou:
   ```bash
   yarn build
   ```

2. **Iniciar o Servidor em Modo de Produção**

   ```bash
   npm start
   ```
   Ou:
   ```bash
   yarn start
   ```

