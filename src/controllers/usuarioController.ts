import { Request, Response } from "express";
import { connectDB } from "../config/database";
import { Usuario } from "../models/usuario";

// Listar todos os usuários
export async function getUsuario(req: Request, res: Response) {
    try {
        const conn = await connectDB();
        const [rows] = await conn.query("SELECT * FROM usuario");
        await conn.end();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: `Erro ao buscar usuários: ${error}`})
    }
}

export async function createUsuario(req: Request, res: Response) {
    const user: Usuario = req.body;
}