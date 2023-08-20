
# Ticket Generator

O objetivo principal deste projeto era consumir a API do github, obtendo as informações como Avatar, Nome e Login de um usuário especifíco. Estes dados ao serem obtidos precisam ser exibidos no layout ao lado, que era a composição do ticket em si. Este ticket é referente a um evento da [Rocketseat](https://www.rocketseat.com.br/) que ocorrerá nos dias 14/08 - 16/08 às 19h, esse evento é sobre a importância e como podemos utilizar as IAs sendo desenvolvedores.

Após gerar o ticket, o usuário pode baixa-lo.
## Rodando os testes

Para rodar os testes, faça o seguinte:

- Clone ou baixe o repositório em sua máquina
- Entre na pasta raiz do projeto e instale as dependências com `npm install`
- Após realizar isso basta rodar o projeto com `npm run dev`

## Documentação da API

```http
  GET /services/api/users/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Nome do usuário no github |

## Demonstração

- [Visualizar o projeto](https://ticketgenerator.vercel.app/)

![Imagem do Projeto](https://cdn.discordapp.com/attachments/970795622531760170/1142924347099594922/Desktop.png)

## Stack utilizada

- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [HTML to Image](https://www.npmjs.com/package/html-to-image)

## Etiquetas

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

