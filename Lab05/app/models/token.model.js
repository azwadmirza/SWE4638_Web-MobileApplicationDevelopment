import mongoose from 'mongoose';

const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
});

const Token=mongoose.models.Token||mongoose.model('Token',tokenSchema);
export default Token;