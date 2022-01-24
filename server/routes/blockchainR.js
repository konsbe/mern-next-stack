import express from "express";

import { getBlocks } from "../controllers/blockchain.js";

const router = express.Router();

router.get("/", getBlocks);

// router.patch("/:id", updateProject);

export default router;
