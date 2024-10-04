import express from 'express';
import { userSignUp, userLogin } from '../controllers/user-controller.js';
const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/login").post(userLogin);

export default router;