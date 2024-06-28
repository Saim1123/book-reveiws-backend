import { uploadOnCloudinary } from "../config/cloudinary.js";
import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ message: `${books.length} books`, data: books });
};

export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.status(200).json({ message: "Book", data: book });
};

export const createBook = async (req, res) => {
  console.log("api working");
  try {
    const { title, description, author, rating } = req.body;
    const imgPath = req.file?.path;
    console.log("img", imgPath);

    if (!imgPath)
      return res.status(400).json({ message: "img path not specified" });

    const img = await uploadOnCloudinary(imgPath);
    console.log("uploaded on cloudinary", img);

    if (!img) return res.status(400).json({ message: "img is required" });

    const book = await Book.create({
      title,
      description,
      author,
      rating,
      img: img.url,
    });

    res.status(200).json({ message: "success", data: book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
