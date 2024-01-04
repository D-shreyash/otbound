const users = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser= async(req,res)=>{
    try{
        const{name,email,password} = req.body;

        console.log(req.body);
        
        const existingUser = await users.findOne({ "personel_Info.email": email });

        if (existingUser) {
            return res.status(403).json({ "error": "Email is already in use, please choose another email" });
        }
        
        const hashed_password =await bcrypt.hash(password,10);

        let user = new users({
            personel_Info:{
                name,email,password:hashed_password
            }
        });
        
        const saveUser = await user.save()
        .then((u)=>{
            return res.status(200).json({"success":"data saved"})
        })
        .catch((u)=>{
            return res.status(500).json({"error":"fail to save on DB",
                                        "err":u})
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error ",
                message:err.message,
            }
        )
    }
}