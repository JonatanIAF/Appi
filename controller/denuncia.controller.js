const Denuncia = require('../models/denuncia.model');
const denunciaCtrl = {};

denunciaCtrl.index = async(req,res)=>{
    const denuncias = await Denuncia.find({"delete":false});
    res.json({denuncias});
};

denunciaCtrl.store = async (req,res)=>{
    const denuncia = new Denuncia(req.body);
    await denuncia.save();
    res.json({
        "status":"succesful",
        "msj":"was created successfully"
    })
};
denunciaCtrl.show = async(req,res)=>{
    const denuncia = await Denuncia.findById(req.params.id);
    res.json(denuncia);
};

denunciaCtrl.update = async(req,res)=>{
    const { id } = req.params;
    const denuncia = {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url
    };
    await Denuncia.findByIdAndUpdate(id,{$set:denuncia},{new: true});
    res.json({status:"was updated successfuly"});
}

denunciaCtrl.delete = async(req,res)=>{
    const update = {
        $set:{delete:true}
    };
    const { id } = req.params;
    await Denuncia.findByIdAndUpdate(id,update);
    res.json({
        status:"was deleted successfuly"
    });
};
denunciaCtrl.activate = async (req,res)=>{
    const update = {
        $set:{delete:false}
    };
    const { id } = req.params;
    await Denuncia.findByIdAndUpdate(id,update);
    res.json({
        status:"was activated successfuly"
    });
}
module.exports = denunciaCtrl;