// src/server.js
import express from "express";
import cors from "cors"; // 1. Thêm dòng này
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import { env } from "prisma/config";
import schoolRouter from "./routes/school.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Thêm dự phòng cổng 3001 nếu .env chưa nhận

// Middleware
app.use(cors()); // 2. Thêm dòng này TRƯỚC các Routes
app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/school", schoolRouter);

// Khởi động Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});