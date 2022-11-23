import { statustype } from '@prisma/client';
import { Request, Response } from 'express';
import { Book } from '../protocols/book.js';
import { excludeBook, findBooks, insertBooks, updateStatus } from '../repository/bookRepository';

async function getBooks(req:Request, res:Response) {
    try {
        const result = await findBooks();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function postBooks(req:Request, res:Response) {
    const { bookTitle, pages, status } = req.body as Book;

    try {
        await insertBooks(bookTitle, pages, status);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function putStatus(req:Request, res:Response) {
    const newStatus = req.body.status as statustype;
    const bookId = Number(req.params.id);

    try {
        await updateStatus(newStatus, bookId);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteBook(req:Request, res:Response) {
    const bookId = Number(req.params.id);

    try {
        await excludeBook(bookId);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { getBooks, postBooks, putStatus, deleteBook }