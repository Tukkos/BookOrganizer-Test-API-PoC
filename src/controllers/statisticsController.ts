import { Request, Response } from 'express';
import { booksRead, pagesRead } from '../repository/statisticsRepository';

async function getNumberOfPagesReaden(req:Request, res:Response) {
    try {
        const result = await (await pagesRead())._sum.pages;
        return res.status(200).send(`Você já leu ${result} páginas em todos os livros já finalizados.`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getNumberOfBooksRead(req:Request, res:Response) {
    try {
        const result = await (await booksRead())._count.id;
        return res.status(200).send(`Você já leu ${result} livros.`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { getNumberOfPagesReaden, getNumberOfBooksRead };