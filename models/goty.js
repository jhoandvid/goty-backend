const {Schema, model}=require('mongoose');

const GotySchema=Schema({

    _id:{
        type:String,
        require:true
    },

    name:{
        type:String,
        require:true
    },
    url: {
        type:String
    },

    votos:{
        type:Number
    }
}, {collection:'gotys'});

GotySchema.method('toJSON', function(){
    const {__v, ...object}=this.toObject();
    return object;
})

module.exports=model('goty', GotySchema)
