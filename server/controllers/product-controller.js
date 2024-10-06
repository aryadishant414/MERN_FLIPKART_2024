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

export const getProductById = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({'id': id});
        if(!product) {
            return res.status(404).send({message:"Cannot find the single product by its ID At backend side. We suggest please check your frontend request"});
        }

        return res.status(200).send(product);
    } catch (error) {
        res.status(500).send({message:"Error while fetching Single Product by its id At Backend side"});
    }
}