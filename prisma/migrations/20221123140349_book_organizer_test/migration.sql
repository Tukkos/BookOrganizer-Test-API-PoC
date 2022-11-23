-- CreateEnum
CREATE TYPE "statustype" AS ENUM ('Não iniciado', 'Em andamento', 'Livro lido');

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "startReading" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "statustype" DEFAULT 'Não iniciado',
    "finishReading" DATE,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_bookTitle_key" ON "books"("bookTitle");
