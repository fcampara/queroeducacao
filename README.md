# Quero educação

## Tecnologias Utilizadas

- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [Cypress.io](https://www.cypress.io/)

## Executando o projeto

Pré requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

Para executar o projeto é necessário ter todos os pré requisitos, após a instalação de todos basta acessar a pasta raiz do projeto e executar os seguintes comandos

```bash
  npm install
  npm start
```

Após a finalização a projeto estará sendo executado na porta 3000 (caso não exista nenhuma outra aplicação sendo executada na porta 3000), após isso basta acessar o link [http://localhost:3000](http://localhost:3000)

## Executando o Docker

Aplicação para ser executada com o Docker, a image está disponível no [Docker Hub](https://cloud.docker.com/u/fcamparasilva/repository/docker/fcamparasilva/queroeducacao)

Para executar a image basta executar os seguintes comandos

```
  docker pull fcamparasilva/queroeducacao
  docker run -d -p 80:80 fcamparasilva/queroeducacao
```

Certifique-se que a porta 80 não está sendo executada por outro aplicação quando esteja basta alterar.

Para gerar a image a partir da pasta do projeto, basta executar os seguintes comandos

```
  docker build -t queroeducacao .
  docker run -d -p 80:80 queroeducacao
```

## Executando o test

Foi desenvolvido teste de integração utilizando a ferramenta [Cypress.io](https://www.cypress.io/) para executar o teste basta executar o seguinte comando

```bash
  npm run test
```

## Hospedagem

O sistema está hospedado no Google Hosting para acessar basta acessar o seguinte link <https://queroeducacao-1aa0d.firebaseapp.com/>
