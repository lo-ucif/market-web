import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  buyProduct,
} from "../controllers/productController";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.put("/buy/:id", buyProduct);

export default router;
