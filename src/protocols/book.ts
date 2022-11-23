import { statustype } from "@prisma/client"

export type Book = {
    id?: number,
    bookTitle: string,
    pages: number,
    startReading?: Date,
    status: statustype,
    finishReading?: Date
}