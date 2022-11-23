import supertest from "supertest";
import server from "../src/app";
import prisma from "../src/database/dbconnector";

const api = supertest(server);
let bookId = 0;

beforeAll(async() => {
    await prisma.books.deleteMany({});
})

describe('Testing POST /books', () => {
    it('Should respond with status 201 and count 1 after posting a book', async () => {

        const postResult = await api.post('/books').send(
            {
                "bookTitle": "Leopardo Negro, Lobo Vermelho 2",
                "pages": 784
            }
        )
        expect(postResult.status).toBe(201);

        const getResult = await prisma.books.count();
        expect(getResult).toBe(1);
    })
})

describe('Testing GET /books', () => {
    it('Should respond with status 200, and if a corresponding body.', async () => {

        const result = await api.get('/books');

        expect(result.status).toBe(200);
        expect(result.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                bookTitle: expect.any(String),
                pages: expect.any(Number),
                startReading: expect.any(String),
                status: expect.any(String),
            })
        ]));
        bookId = result.body[0].id;
    })
})

describe('Testing PUT: /books/:id', () => {
    it('Should respond with status 200 and with the status of the book changed', async () => {

        const putResult = await api.put(`/books/${bookId}`).send(
            {
                "status": "Livro_lido"
            }
        );
        expect(putResult.status).toBe(200);

        const getResult = await api.get('/books');
        expect(getResult.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                bookTitle: expect.any(String),
                pages: expect.any(Number),
                startReading: expect.any(String),
                status: "Livro_lido",
            })
        ]));
    })
})

describe('Testing DELETE /books/delete/:id', () => {
    it('Should respond with status 204 and count 0 after deleting the book', async () => {

        const deleteResult = await api.delete(`/books/delete/${bookId}`);
        expect(deleteResult.status).toBe(204);
        
        const getResult = await prisma.books.count();
        expect(getResult).toBe(0);
    })  
})

describe('Testing GET: /pagesRead', () => {
    it('Should respond with status 200 and a string returning how many pages user have read.', async () => {

        const result = await api.get('/pagesRead');
        expect(result.status).toBe(200);
        expect(result.text).toEqual(expect.any(String));
    })
})

describe('Testing GET: /booksRead', () => {
    it('Should respond with status 200 and a string returnin how many books user have read.', async () => {

        const result = await api.get('/booksRead');
        expect(result.status).toBe(200);
        expect(result.text).toEqual(expect.any(String));
    })
})