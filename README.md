<div align="center">
  <h1>Next Level Week 06 - Mission: Node.js</h1>
  <p><i>Projeto desenvolvido durante o NLW06. Sistema de elogios com login e cadastro </i></p>
</div>

## Sumário

-   [Informações Gerais](#informações-gerais)
-   [Tecnologias](#tecnologias)
-   [Instalação](#instalação)
-   [Como Usar](#como-usar)
-   [Endpoints](#endpoints)

## Informações Gerais

Nesta  aplicação foi desenvolvido, utilizando o Node.js, um sistema de elogios (Compliments) que permite que o usuário autenticado possa "elogiar" um colega utilizando tags.

## Tecnologias

-   NodeJs
-   Typescript
-   SQLite
-   TypeORM

## Instalação

### Pré-requisitos

-   Possuir Node e Yarn instalado
-   Possuir software para realizar requests http (ex.: Postman, Insomnia)

1. Clone o repositório
2. `$ yarn`
3. `$ yarn dev`

## Como Usar

1. O usuário cria uma conta, fornecendo o nome, o email e a senha.
2. O usuário faz o login, gerando um token com validade de 1 dia.
3. O usuário pode conferir os usuários e as tags cadastradas no sistema, podendo escolher os id respectivos para fazer um elogio.
4. O usuário fornece o id do destinatário, o id da tag e a mensagem, cadastrando um elogio.
5. O usuário pode conferir os elogios enviados por ele e recebidos.

Obs. Caso o usuário seja administrador, poderá criar uma nova tag fornecendo seu nome.

## Endpoints

```
baseURL: http://localhost:3000
```
```
POST
/users - criar usuário

body: {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
```
```
POST
/tags - criar nova tag *precisa estar logado e ser admin*

body: {
  name: string;
}
```
```
POST
/login - fazer o login

body: {
  email: string;
  password: string;
}
```
```
POST
/compliments - criar um novo elogio *deve estar logado*

body: {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}
```
```
GET
/users/compliments/send - listar os elogios enviados *deve estar logado*
```
```
GET
/users/compliments/receive - listar os elogios recebidos *deve estar logado*
```
```
GET
/tags - listar as tags *deve estar logado*
```
```
GET
/users - listar os usuários *deve estar logado*
```
