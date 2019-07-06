const mongoose =  require('mongoose');
const {Schema} = mongoose;
const User = mongoose.model('User');
const DenunciaSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String, required:true},
    image_url:{type:String, required:false},
    date_time:{type:Date, default:Date.now, required:true},
    delete:{type:Boolean, default:false},
    user:{type: Schema.Types.ObjectId, ref: "User" }
});

module.exports =  mongoose.model('Denuncia',DenunciaSchema);