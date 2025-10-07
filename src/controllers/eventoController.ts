import { Request, Response } from "express";
import { connectDB } from "../config/database";
import { Evento } from "../models/evento";

// Listar todos os eventos
export async function getEventos(req: Request, res: Response) {
    try {
        const connection = await connectDB();
        const [rows] = await connection.query("SELECT * FROM Evento");
        await connection.end();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar eventos", error})
    }
}

export async function createEvento(req: Request, res: Response) {
    const evento: Evento = req.body;
    try {
        const conn = await connectDB();
        const query = `
            INSERT INTO Evento (Nome_Evento, LimitePessoas_Evento, Data_Evento, Horario_Evento, Descricao_Evento, Imagem_Evento, Usuario_ID_Usuario)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await conn.query(query, [
            evento.Nome_Evento,
            evento.LimitePessoas_Evento,
            evento.Data_Evento,
            evento.Horario_Evento,
            evento.Descricao_Evento,
            evento.Imagem_Evento,
            evento.Usuario_ID_Usuario,
        ]);
        await conn.end();
        res.status(201).json({ ID_Evento: (result as any).insertId, ...evento });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar evento', error })
    }
}

export async function updateEvento(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const evento: Evento = req.body;
    try {
        const conn = await connectDB();
        const query = `
            UPDATE Evento
            SET Nome_Evento = ?, LimitePessoas_Evento = ?, Data_Evento = ?, Horario_Evento = ?, Descricao_Evento = ?, 
                Imagem_Evento = ?, Usuario_ID_Usuario = ?
            WHERE ID_Evento = ?
        `;
        await conn.query(query, [
            evento.Nome_Evento,
            evento.LimitePessoas_Evento,
            evento.Data_Evento,
            evento.Horario_Evento,
            evento.Descricao_Evento,
            evento.Imagem_Evento,
            id,
        ]);
        res.json({ ID_Evento: id, ...evento });
    } catch (error) {
        res.status(500).json({ message: `Erro ao atualizar evento ${error}` });
    }
}

export async function deleteEvento(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    try {
        const conn = await connectDB();
        await conn.query("DELETE FROM Evento WHERE ID_Evento = ?", [id]);
        await conn.end();
        res.json({ message: "Evento apagado do sistema." });
    } catch (error) {
        res.status(500).json({ message: `Erro ao apagar evento ${error}` })
    };
};