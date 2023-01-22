import { Router } from "express";
import dogs from "./dogs/routes";

const router = Router();

router.use("/dogs", dogs);

export default router;
