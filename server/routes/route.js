import express from 'express';
import { userSignUp } from '../controllers/user-controller.js';
const router = express.Router();

router.route("/signup").post(userSignUp);

export default router;