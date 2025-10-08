import express, { Application } from "express";
import dotenv from "dotenv"
import eventoRoutes from "./routes/eventoRoutes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", eventoRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}) 