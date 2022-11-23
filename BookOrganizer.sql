CREATE TYPE STATUSTYPE AS ENUM ('Não iniciado', 'Em andamento', 'Livro lido');

CREATE TABLE "books" (
    "id" SERIAL PRIMARY KEY,
    "bookTitle" TEXT UNIQUE NOT NULL,
    "pages" INTEGER NOT NULL,
    "startReading" DATE DEFAULT NOW() NOT NULL,
    "status" STATUSTYPE DEFAULT 'Não iniciado' NOT NULL,
    "finishReading" DATE
);