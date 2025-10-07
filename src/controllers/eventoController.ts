import { Request, Response } from "express";
import { connectDB } from "../config/database";
import { Evento } from "../models/evento";

// Listar todos os eventos
export async function getEventos(req: Request, res: Response) {
    try {
        const connection = await connectDB();
        const [rows] = await connection.query("SELECT * FROM evento");
        await connection.end();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar eventos", error})
    }
}