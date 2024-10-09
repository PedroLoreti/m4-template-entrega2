import express, { json } from "express";
import { booksRoutes } from "./routes/books.routes";

export const app = express();

app.use(json());

app.use("/books", booksRoutes);

