import { Request, Response } from "express";
import Wilaya from "../models/wilaya";

// CREATE
export const createWilaya = async (req: Request, res: Response) => {
  try {
    if (Array.isArray(req.body)) {
      const wilayas = await Wilaya.insertMany(req.body);
      return res.status(201).json(wilayas);
    }
    const wilaya = await Wilaya.create(req.body);
    res.status(201).json(wilaya);
  } catch (error) {
    console.error(error); // مهم لطباعة الخطأ الحقيقي في السيرفر
    res.status(500).json({ message: "Error creating wilaya" });
  }
};
// READ ALL
export const getWilayas = async (_: Request, res: Response) => {
  const wilayas = await Wilaya.find();
  res.json(wilayas);
};

// UPDATE
export const updateWilaya = async (req: Request, res: Response) => {
  try {
    const wilaya = await Wilaya.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(wilaya);
  } catch (error) {
    res.status(500).json({ message: "Error updating wilaya" });
  }
};

// DELETE
export const deleteWilaya = async (req: Request, res: Response) => {
  try {
    await Wilaya.findByIdAndDelete(req.params.id);
    res.json({ message: "Wilaya deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting wilaya" });
  }
};
