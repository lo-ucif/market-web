import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productRoutes from "./routes/productRoutes";
import wilayaRouter from "./routes/wilayaRouter";
import orderRouter from "./routes/orderRouter";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/wilayas", wilayaRouter);
app.use("/api/order", orderRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
