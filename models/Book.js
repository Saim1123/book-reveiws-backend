import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
