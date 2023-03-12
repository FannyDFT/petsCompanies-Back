import { Router } from "express";
import dogs from "./dogs/routes";
import cats from "./cats/routes";

const router = Router();

router.use("/dogs", dogs);
router.use("/cats", cats);

export default router;
