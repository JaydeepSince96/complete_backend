// src/index.ts
import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
import { PORT } from "./configs/env";
import todoRoutes from "./routes/todoRoute";

const app = express();

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"], // Add your frontend URLs
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});