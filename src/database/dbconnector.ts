import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;

// import pg from 'pg';
// import dotenv from 'dotenv';
// dotenv.config();

// const { Pool } = pg;

// const databaseConfig = {
//     connectionString: process.env.DATABASE_URL
// }

// const connection = new Pool(databaseConfig);

// export default connection;