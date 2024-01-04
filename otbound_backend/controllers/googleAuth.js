const users = require("../models/user")

exports.googleAuthRoute = async(req,res) =>{
    try{
        let{name,email} = req.body;

    const existingUser = await users.findOne({"personael_Id.email":email});

    if(existingUser){
        return res.status(402).json({ "error": "Email is already in use, please choose another email" });
    }

    let user = new users({
        personel_Info:{
            name,email
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
    catch(error){
        return res.status(200).json({"error":"fail...."})
    }

}