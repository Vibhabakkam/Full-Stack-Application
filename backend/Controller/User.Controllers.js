import USer from "../Model/User.schema.js";

export const register = async (req,res) => {
    try {
        const{name, email, password} = req.body;
        if(!name||!email||!password) return res.send("all filled are required");

        const isUserExist = await USer.findOne({email});
        if(isUserExist){
            return res.json({status:404, message:"email already present please try another"})
        }
        const newUser = new USer({name, email, password});
        await newUser.save();
        return res.json({status:200, message:"registrations sucessfully completed"})
        
    } catch (error) {
        return res.send(error);
    }
}

export const login = async (req,res) => {
    try {

        const {email, password} = req.body;
        if (!email||!password) return res.send("all filled are required");
        
        const isCUserExist = await USer.findOne({email, password});
        if (isCUserExist){
            return res.json({status:200, message:"Login Succesfully completed"});
        }

        return res.json({status:404, message:"please check your crendentional"});
        
    } catch (error) {
        res.send(error);
    }
}