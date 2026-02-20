import { Request, Response } from "express";
import Product from "../models/Product";

// CREATE
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// READ
export const getProducts = async (_: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

// UPDATE
export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
};

// DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

// BUY
export const buyProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (!product || product.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  product.quantity -= 1;
  await product.save();

  res.json(product);
};
