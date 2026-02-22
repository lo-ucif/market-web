import { Request, Response } from "express";
import Order from "../models/orders";

// =======================
// CREATE ORDER
// =======================
export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      name,
      lastName,
      phone,
      address,
      wilaya,
      productname,
      price,
      quantity,
      deliveryType,
      deliveryPrice,
    } = req.body;

    if (
      !name ||
      !lastName ||
      !phone ||
      !wilaya ||
      !productname ||
      !price ||
      !quantity ||
      !deliveryType ||
      deliveryPrice == null
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const totalPrice = price * quantity + deliveryPrice;

    const order = await Order.create({
      name,
      lastName,
      phone,
      address: address || "",
      wilaya,
      productname,
      price,
      quantity,
      deliveryType,
      deliveryPrice,
      totalPrice,
      status: "unconfirmed",
    });

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating order" });
  }
};

// =======================
// GET ALL ORDERS
// =======================
export const getOrders = async (_: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// =======================
// GET ORDER BY ID
// =======================
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching order" });
  }
};

// =======================
// UPDATE ORDER STATUS
// =======================
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;

    if (!["confirmed", "unconfirmed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Order status updated", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating order status" });
  }
};

// =======================
// DELETE ORDER
// =======================
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting order" });
  }
};
