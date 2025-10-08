import request from "supertest";
import express, { Application } from "express"
import { getEventos, createEvento, updateEvento, deleteEvento } from "../controllers/eventoController";

const app: Application = express();
app.use(express.json());
app.get("/api/eventos", getEventos);

describe("Evento Controller", () => {
    test("GET /api/eventos - success", async () => {
        const response = await request(app).get("/api/eventos");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
})