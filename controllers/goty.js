const { json } = require('express');
const { findById, findByIdAndUpdate } = require('../models/goty');
const Goty=require('../models/goty');

const getGoty=async(req, res)=>{

    const goty=await Goty.find();
    

    res.json(goty)

}

/* const postGoty=async(req, res)=>{
    console.log(req.body)


    const goty=await Goty.insertMany(req.body)
 
    res.json({
       goty 
    })

} */

const postGoty=async(req, res)=>{
    const id=req.params.id;

    const existe=await Goty.findById(id);

    if(!existe){ 
        return res.json({
            msg:'No existe'
        })
    }

 
   

  // Goty.findByIdAndUpdate(id, {go}, {new:true})
    const goty=await Goty.findByIdAndUpdate(id);
    const votos=goty.votos+1;

    await Goty.findByIdAndUpdate(id, {votos}, {new:true});

    res.json({
        ok:true,
        mensaje:`Gracias por su voto a ${goty.name}`
    })
}



module.exports={
    postGoty, 
    getGoty, 
   
}