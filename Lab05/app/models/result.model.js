import mongoose from 'mongoose';


const resultSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    quizId: {
        type: String,
        required: true,
    },
    results: {
        type: Number,
        required: true,
    },
    time:{
        hours:{
            type:Number,
            required:true
        },
        minutes:{
            type:Number,
            required:true
        },
        seconds:{
            type:Number,
            required:true
        }
    }
},{
    timestamps: true
});

const Result = mongoose.models.Result||mongoose.model('Result', resultSchema);

export default Result;