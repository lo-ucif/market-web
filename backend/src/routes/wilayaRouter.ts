import express from "express";
import {
  createWilaya,
  getWilayas,
  updateWilaya,
  deleteWilaya,
} from "../controllers/wilayaController";

const router = express.Router();

router.post("/", createWilaya); // إضافة ولاية
router.get("/", getWilayas); // جلب كل الولايات
router.put("/:id", updateWilaya); // تعديل الاسم أو أسعار Office/Home
router.delete("/:id", deleteWilaya); // حذف ولاية

export default router;
