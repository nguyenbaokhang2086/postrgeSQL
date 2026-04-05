// src/server.js
import express from "express";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import { env } from "prisma/config";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRouter);

// Khởi động Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});