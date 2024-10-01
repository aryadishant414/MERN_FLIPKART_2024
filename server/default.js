// This file is responsible for storing data on database


import { products } from "./constants/data.js";
import { Product } from "./models/product-schema.js";

export const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("Products Inserted Successfully in Database");
    } catch (error) {
        console.log("Error while inserting default data on Database", error.message);
        
    }
}

