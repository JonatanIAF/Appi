const User = require('../models/user.model');
const authCtrl = {};

authCtrl.login = async (req,res)=>{
    const user = await User.find({email:req.body.email, password: req.body.password});
    console.log(user);
    res.json(user);
}

module.exports = authCtrl;