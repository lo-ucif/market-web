import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController";

const router = express.Router();

router.post("/", createOrder); // إنشاء طلب
router.get("/", getOrders); // جلب كل الطلبات
router.get("/:id", getOrderById); // جلب طلب واحد
router.put("/:id/status", updateOrderStatus); // تحديث الحالة
router.delete("/:id", deleteOrder); // حذف طلب

export default router;
