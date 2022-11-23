import express from 'express';
import cors from 'cors';
import bookRouter from './routes/booksRouter';
import statisticsRouter from './routes/statisticsRouter';

const server = express();
server.use(express.json());
server.use(cors());

server.use(bookRouter);
server.use(statisticsRouter);

server.listen(4000, () => [
    console.log('Server listening on route 4000')
])

export default server;