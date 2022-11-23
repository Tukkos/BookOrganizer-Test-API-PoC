import { Request, Response } from 'express';
import { findOneBook } from '../repository/bookRepository';
import { BookSchema } from "../schemas/bookSchema";

function validateBook(req:Request, res:Response, next) {
    const { error } = BookSchema.validate(req.body, { abortEarly: false});
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }
    next()
}

async function checkIfBooksExists(req:Request, res:Response, next) {
    const bookId = Number(req.params.id);
    try {
        const bookExists = await findOneBook(bookId);
        if (bookExists === undefined) {
            return res.sendStatus(404);
        }
        next()
    } catch (error) {
        return res.status(500).send(error.message);
    }
    
}

export { validateBook, checkIfBooksExists };