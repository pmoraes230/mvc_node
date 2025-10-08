import { Router } from "express";
import { getEventos, createEvento, updateEvento, deleteEvento } from "../controllers/eventoController";

const router = Router();

router.get("/eventos", getEventos);
router.post("/eventos", createEvento);
router.put("/eventos/:id", updateEvento);
router.delete("/eventos/:id", deleteEvento);

export default router;