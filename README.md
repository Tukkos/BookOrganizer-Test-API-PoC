# BookOrganizer-Typescript-API-PoC

This project is an study on Typescript(TS), creating an basic CRUD in a Postgres API. To show my studies I decided do make an Book Organizer that can save users books and indicates some statistics about it.

# About 

This project had the purpose to show that I learned how to:

- Configure an basic setup of an API with TS;
- Understand how some @types works and how some dependencies works with it;
- Make an CRUD using TS needs without using "Any" type;
- Understand difference between time of compilation and time of excecution;

Routes: 
```bash

GET: /books
Returning: List of all books that you have on database;

POST: /books
Body: { "bookTitle": "Book Title Exemple", "pages": 200, "status": "Não iniciado" }
obs: -pages must be a number;
     -status must be one of this strings: 'Não iniciado' | 'Em andamento' | 'Livro lido'.
     
PUT: /books/:id
Body: { "status": "Não iniciado" }
obs: -status must be one of this strings: 'Não iniciado' | 'Em andamento' | 'Livro lido'.

DELETE: /books/delete/:id

GET: /pagesRead
Returning: A string with how many pages you have read on your finished books;

GET: /booksRead
Returning: A string with how many books you have finished;

```

# Technologies

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

# How to run

1. Clone this repository;
2. Install all dependecies;
```bash
npm i
```
3. Create a PostgrsSQL database named "bookOrganizer" or whatever name you want;
4. Congigure .env file using .env.exemple file;
5. Popule database using the code in dump.sql;
6. Let this code runnig on your terminal:
```bash
nodemon src/app.ts
```
and you can start testing the API!
