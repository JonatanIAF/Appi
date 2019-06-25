const User = require('../models/user.model');
const userCtrl = {};

userCtrl.index = async (req,res)=>{
    const users = await User.find({"delete":false});
    res.json(users);
}

userCtrl.show = async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.store = async (req,res)=>{
    const user = new User(req.body);
    await user.save()
    res.json({
        "status":"succesful",
        "msj":"the user was created successfully"
    })
}

userCtrl.update  = async (req,res)=>{
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    await User.findByIdAndUpdate(id,{$set:user},{new: true});
    res.json({status:"User was updated successfuly"});
}

userCtrl.delete = async (req,res)=>{
    const update = {
        $set:{delete:true}
    };
    const { id } = req.params;
    await User.findByIdAndUpdate(id,update);
    res.json({
        status:"User was deleted successfuly"
    });
}

userCtrl.activate = async (req,res)=>{
    const update = {
        $set:{delete:false}
    };
    const { id } = req.params;
    await User.findByIdAndUpdate(id,update);
    res.json({
        status:"User was activated successfuly"
    });
}


module.exports = userCtrl;