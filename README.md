<h1 align="center">Next Level Week 06 - Mission: Node.js</h1>

---

## O que é?

Nesta  aplicação foi desenvolvido, utilizando o Node.js, um sistema de elogios (Compliments) que permite que o usuário autenticado possa "elogiar" um colega
utilizando tags.

## Como funciona?

1. O usuário cria uma conta, fornecendo o nome, o email e a senha.
2. O usuário faz o login, gerando um token com validade de 1 dia.
3. O usuário pode conferir os usuários e as tags cadastradas no sistema, podendo escolher os id respectivos para fazer um elogio.
4. O usuário fornece o id do destinatário, o id da tag e a mensagem, cadastrando um elogio.
5. O usuário pode conferir os elogios enviados por ele e recebidos.

Obs. Caso o usuário seja administrador, poderá criar uma nova tag fornecendo seu nome.

## Tecnologias

Para a aplicação, foram utilizados:
- Node.js: framework express;
- Typescript;
- Banco de dados: SQLite;
- Diversas dependências, como bcryptjs, uuid, typeorm...
