import express from "express";
import {
  createWilaya,
  getWilayas,
  updateWilaya,
  deleteWilaya,
} from "../controllers/wilayaController";

const router = express.Router();

router.get("/", getWilayas);
router.post("/", createWilaya);
router.put("/:id", updateWilaya);
router.delete("/:id", deleteWilaya);

export default router;
