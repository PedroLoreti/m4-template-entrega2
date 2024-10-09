import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid, IsBookValid } from "../middlewares/isBookValid.middlewares";

export const booksRoutes = Router();

const booksControllers = new BooksControllers


booksRoutes.get("/", booksControllers.getBooks)

booksRoutes.post("/", IsBookValid.execute, booksControllers.createBook)

booksRoutes.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook)

booksRoutes.get("/:id", IsBookIdValid.execute, booksControllers.getBookById)

booksRoutes.patch("/:id", IsBookIdValid.execute, IsBookValid.execute, booksControllers.updateBook)

