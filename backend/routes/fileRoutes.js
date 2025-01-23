import express from "express";
import { getPdf } from "../controllers/fileController.js";

const router = express.Router();

router.get("/get-pdf", getPdf);

export default router;