const mongoose=require('mongoose')

const expertSchema=mongoose.Schema({
    fullname:{
        type:String
    },
    experience:{
        type:Number
    },
    commercials:{
        type:Number
    },
    expert:{
        type:String
    },
    contact:{
        type:Number
    }
});

module.exports=mongoose.model('expert',expertSchema)