# BookOrganizer-Typescript-API-PoC

This project is an study on Jest tests, creating basic tests in an existing CRUD. To show my studies I decided to update my Book Organizer that can save users books and indicates some statistics about it.

# About 

This project had the purpose to show that I learned how to:

- Configure an basic setup of Jest;
- Understand how expect some errors and how tests are supposed to show them;
- Test the existing CRUD using Jest and supertest;

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
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

# How to run

1. Clone this repository;
2. Install all dependecies;
```bash
npm i
```
3. Create a PostgrsSQL database named "bookOrganizer" and "bookOrganizer_test" or whatever name you want;
4. Congigure .env and .env.test file using .env.exemple file;
5. Popule database using the code in dump.sql;
6. Run tests with the command:
```bash
npx dotenv -e .env.test npx jest
```
7. Let this code runnig on your terminal:
```bash
nodemon src/app.ts
```
and you can start testing the API!
