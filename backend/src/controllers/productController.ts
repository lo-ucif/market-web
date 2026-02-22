import { Request, Response } from "express";
import Product from "../models/Product";

// =======================
// CREATE
// =======================
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, img } = req.body;

    if (!name || !price || !quantity || !img) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating product" });
  }
};

// =======================
// READ (ALL)
// =======================
export const getProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// =======================
// READ (ONE)
// =======================
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// =======================
// UPDATE
// =======================
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// =======================
// DELETE
// =======================
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

// =======================
// BUY (with quantity)
// =======================
export const buyProduct = async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body; // الكمية المختارة
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    product.quantity -= quantity;
    await product.save();

    res.json({
      message: "Purchase successful",
      remainingQuantity: product.quantity,
      boughtQuantity: quantity,
      totalPrice: product.price * quantity,
    });
  } catch (error) {
    res.status(500).json({ message: "Error processing purchase" });
  }
};
