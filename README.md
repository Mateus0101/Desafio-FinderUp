

<h1 align="center">
    <a href="#" alt="Api Fabrica de Bolos"> API Fabrica de Bolos </a>
</h1>

<h3 align="center">
    Sua API para ajudar na gestão de matérias primas para confecção de bolos. 
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Mateus0101/Desafio-FinderUp?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Mateus0101/Desafio-FinderUp">
  
  <a href="https://github.com/Mateus0101/Desafio-FinderUp/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Mateus0101/Desafio-FinderUp">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Mateus0101/Desafio-FinderUp/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Mateus0101/Desafio-FinderUp?style=social">
  </a>
 
</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
     * [Server](#user-content-server--nodejs----typescript)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

API Fabrica de Bolos - é uma API capaz de conectar o sistema da sua padaria e ajudar na gestão das matérias primas utilizadas na confecção dos itens do seu cardápio.

---

## ⚙️ Funcionalidades

- [x] O estoquista pode cadastrar uma nova matéria prima:
  - [x] Nome da matéria prima.
    - Farinha de trigo
  - [x] Quantidade de matéria prima.
    - 5
  - [x] Nome do usuario que está cadastrando a matéria prima.
    - Fulano

- [x] O padeiro pode consultar as matérias primas por nome:
  - [x] Nome da matéria prima.
    - Farinha de trigo

- [x] O padeiro pode utilizar as matérias primas através do nome:
  - [x] Nome da matéria prima.
    - Farinha de trigo
  - [x] Quantidade de matéria prima.
    - 5
  - [x] Nome do usuario que irá utilizar a matéria prima.
    - Ciclano

OBS: Ao tentar utilizar uma quantidade de matéria prima, primeiro a API verifica se há essa quantidade disponível, se houver ele permite a retirada e dá a baixa na quantidade que havia no estoque. Caso não tenha a quantidade solicitada, o usuário é avisado sobre isso.

---

## 🎨 Layout

Por se tratar do desenvolvimento de uma API, foi implementado apenas o BackEnd.

---

## 🚀 Como executar o projeto

Este projeto contem apenas uma parte:
1. Backend 

💡Para que a API funcione, é necessário que o Backend esteja sendo executado.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:Mateus0101/Desafio-FinderUp.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-FinderUp

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000 
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/Mateus0101/Desafio-FinderUp#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [JavaScript](https://www.javascript.com/))

-   **[Express](https://expressjs.com/)**
-   **[Nomemon](https://www.npmjs.com/package/nodemon)**
-   **[MySQL](https://www.mysql.com/)**
-   **[KnexJS](http://knexjs.org/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**

> Veja o arquivo  [package.json](https://github.com/Mateus0101/Desafio-FinderUp/blob/main/package.json)

#### [](https://github.com/Mateus0101/Desafio-FinderUp#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  
-   Banco de Dados: **[MySQL](https://www.mysql.com/)**
-   Commit:  **[GitHub](https://github.com/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**

---

## 🦸 Autor

 <sub><b>Mateus Menezes</b></sub>


[![Linkedin Badge](https://img.shields.io/badge/-Mateus-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mateus-menezes-77b082121/)](https://www.linkedin.com/in/mateus-menezes-77b082121) 
[![Gmail Badge](https://img.shields.io/badge/-mateu.menezesmenezes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mateu.menezesmenezes@gmail.com)](mailto:mateu.menezesmenezes@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Mateus Menezes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/mateus-menezes-77b082121)
