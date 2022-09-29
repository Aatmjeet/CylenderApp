import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/:id', getUser);
router.patch('/:id', updateUser);

export default router;