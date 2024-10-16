import express from 'express';
import { userSignUp, userLogin } from '../controllers/user-controller.js';
import { getProducts, getProductById } from '../controllers/product-controller.js';
import { addPaymentGateway } from '../controllers/payment-controller.js';
const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/login").post(userLogin);

router.route("/products").get(getProducts); //get all products
router.route("/product/:id").get(getProductById);

// paytm payment
router.route("/payment").post(addPaymentGateway);

export default router;