import Stripe from 'stripe';


const stripe = new Stripe("sk_test_51Q8yX5LJipLU7BRKCuHzFSbg87GcEAhWVcA3ywDQ49L9ztCLlHPm6PsbkKvYdOxdcrpIUFrQfaqU0TKqR07xNCwc006egnVMvT");

// payment integration Backend API
export const addPaymentGateway = async (req, res) => {
    try {
        const product = req.body;
        console.log("INSIDE PRODUCT AT BACKEND PAYMENT IS : ", product);

           const lineItems = product.singleProduct ?
           product.singleProduct.map(item => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.title.shortTitle, // Each product's name in the cart
                },
                unit_amount: item.price.cost * 100, // Convert price to rupees
            },
            quantity: item.quantity, // Quantity of each product
        }))  
         : 
         product.multipleProducts.map(item => ({
             price_data: {
                 currency: "inr",
                 product_data: {
                     name: item.title.shortTitle, // Each product's name in the cart
                 },
                 unit_amount: item.price.cost * 100, // Convert price to rupees
             },
             quantity: item.quantity, // Quantity of each product
         }));



        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "https://example.com/success",
            cancel_url: "https://example.com/cancel",
          });

          res.status(200).send({id: session.id});

    } catch (error) {
        res.status(500).send({error: error.message});
    }
}