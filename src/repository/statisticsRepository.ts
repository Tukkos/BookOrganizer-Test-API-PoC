import prisma from '../database/dbconnector';

function pagesRead() {
    return prisma.books.aggregate({
        _sum: {
            pages: true,
        },
        where: {
            status: "Livro_lido"
        }
    })
    // return connection.query(`
    //     SELECT SUM(pages)
    //     FROM books
    //     WHERE status = 'Livro lido';
    // `);
}

function booksRead() {
    return prisma.books.aggregate({
        _count: {
            id: true,
        },
        where: {
            status: "Livro_lido"
        }
    })
    // return connection.query(`
    //     SELECT COUNT(id) as count
    //     FROM books
    //     WHERE status = 'Livro lido';
    // `);
}

export { pagesRead, booksRead };