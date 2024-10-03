import { User } from "../models/user-schema.js";

export const userSignUp = async (req, res) => {
    try {
        // console.log("User SignUp Data coming inside Backend is : ",req.body);

        const exist = await User.findOne({username: req.body.username});
        if(exist) {
            return res.status(404).send({message: "User Already Exists"});
        }
        
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).send({message: "User Registered Successfully"});
        
    } catch (error) {
        // console.log("Error while User SignUp in Backend side", error);
        res.status(500).send({meessage: "Internal Server error while Sign up new user"}, error.message);
    }
}