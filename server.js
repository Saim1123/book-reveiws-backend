import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/db.js";
import { router as userRoutes } from "./routes/user.routes.js";
import { router as bookRoutes } from "./routes/book.routes.js";

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://capable-concha-c7f6ee.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/book", bookRoutes);

app.get("/", (req, res) => {
  res.send(200).send("Welcome");
});

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server running on port ${port}`));
