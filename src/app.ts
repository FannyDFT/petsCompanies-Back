import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api";

dotenv.config();
const app = Express();

app.use(Express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1", api);

export default app;
