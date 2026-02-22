import { Request, Response } from "express";
import Wilaya from "../models/wilaya";

// =======================
// CREATE
// =======================
export const createWilaya = async (req: Request, res: Response) => {
  try {
    const { name, deliveryOfficePrice, deliveryHomePrice } = req.body;

    if (!name || deliveryOfficePrice == null || deliveryHomePrice == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const wilaya = await Wilaya.create({
      name,
      deliveryOfficePrice,
      deliveryHomePrice,
    });

    res.status(201).json({
      message: "Wilaya created successfully",
      wilaya,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating wilaya" });
  }
};

// =======================
// READ ALL
// =======================
export const getWilayas = async (_: Request, res: Response) => {
  try {
    const wilayas = await Wilaya.find();
    res.json(wilayas);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wilayas" });
  }
};

// =======================
// UPDATE (name or prices)
// =======================
export const updateWilaya = async (req: Request, res: Response) => {
  try {
    const { name, deliveryOfficePrice, deliveryHomePrice } = req.body;

    const wilaya = await Wilaya.findById(req.params.id);

    if (!wilaya) {
      return res.status(404).json({ message: "Wilaya not found" });
    }

    if (name) wilaya.name = name;
    if (deliveryOfficePrice != null)
      wilaya.deliveryOfficePrice = deliveryOfficePrice;
    if (deliveryHomePrice != null) wilaya.deliveryHomePrice = deliveryHomePrice;

    await wilaya.save();

    res.json({ message: "Wilaya updated successfully", wilaya });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating wilaya" });
  }
};

// =======================
// DELETE
// =======================
export const deleteWilaya = async (req: Request, res: Response) => {
  try {
    const wilaya = await Wilaya.findByIdAndDelete(req.params.id);

    if (!wilaya) {
      return res.status(404).json({ message: "Wilaya not found" });
    }

    res.json({ message: "Wilaya deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting wilaya" });
  }
};
