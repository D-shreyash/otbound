const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.signUser=async(req,res)=>{
    
    let{email,password}= req.body;

    User.findOne({"personel_Info.email":email})
    .then((user)=>{
        if(!user){
            return res.status(403).json({"error":"Email not found"});
        }
        
        bcrypt.compare(password,user.personel_Info.password,(err,result)=>{
            if(err){
                return res.status(403).json({"error":"error occurr while login please try agin"});
            }
            if(!result){
                return res.status(403).json({"error":"Incorrect password"});
            }
            else{
                return res.status(200).json({"success":"login successfull"});
            }
        })
    })
    .catch((err)=>{
        console.log(err);
        return res.status(500).json({"error":err.message});
    })
}
