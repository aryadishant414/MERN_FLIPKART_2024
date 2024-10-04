import { Product } from '../models/product-schema.js';

export const getProducts = async (req, res) => {
    try {
        // console.log("BACKEND KE ANDAR TOO AGYA HAI");
        
        const products = await Product.find({});

        // console.log("RESPONSE BHEJ RHE HAI");
        
        res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({message: "Error while Fetching Products at Backend side"});
    }
}