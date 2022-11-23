import prisma from '../database/dbconnector';
import { statustype } from "@prisma/client";

function findBooks() {
    return prisma.books.findMany();
    // return connection.query(`
    //     SELECT
    //         "bookTitle",
    //         "pages",
    //         "status"
    //     FROM books;
    // `);
}

function findOneBook(bookId: number) {
    return prisma.books.findUnique({
        where: {
            id: bookId,
        },
    });
    // return connection.query(`
    //     SELECT *
    //     FROM books
    //     WHERE id = $1;
    // `, [bookId]);
}

function insertBooks(bookTitle: string, pages: number, status: statustype) {
    return prisma.books.create({
        data: {
            "bookTitle": bookTitle,
            "pages": pages,
            "status": status,
        },
    })
    // return connection.query(`
    //     INSERT INTO books
    //         ("bookTitle", "pages", "status")
    //     VALUES
    //         ($1, $2, $3);
    // `, [bookTitle, pages, status]);
}

function updateStatus(status: statustype, bookId: number) {
    return prisma.books.update({
        where: {
            id: bookId,
        },
        data: {
            status: status,
        },
    })
    // return connection.query(`
    //     UPDATE books
    //     SET status = $1
    //     WHERE id = $2;
    // `, [status, bookId]);
}

function excludeBook(bookId: number) {
    return prisma.books.delete({
        where: {
            id: bookId,
        },
    })
    // return connection.query(`
    //     DELETE FROM books
    //     WHERE id = $1;
    // `, [bookId]);
}

export { findBooks, findOneBook, insertBooks, updateStatus, excludeBook };