import express from 'express';
import { userSignUp, userLogin } from '../controllers/user-controller.js';
import { getProducts } from '../controllers/product-controller.js';
const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/login").post(userLogin);

router.route("/products").get(getProducts);

export default router;