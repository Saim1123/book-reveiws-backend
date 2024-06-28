import { Router } from "express";
import joiMiddleware from "../middleware/joi.middleware.js";
import {
  getBooks,
  getBookById,
  createBook,
} from "../controllers/book.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
import { bookValidation } from "../validation/book.validations.js";

const router = Router();

router.get("/", getBooks);
router.post(
  "/",
  upload.single("img"),
  joiMiddleware(bookValidation),
  createBook
);
router.get("/:id", getBookById);

export { router };
