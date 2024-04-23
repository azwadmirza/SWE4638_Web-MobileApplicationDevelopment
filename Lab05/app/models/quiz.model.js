import mongoose from 'mongoose';


const quizSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    time:{
        hours:{
            type: Number,
            required: true,
        },
        minutes:{
            type: Number,
            required: true,
        },
        seconds:{
            type: Number,
            required: true,
        }
    },
    questions: [
        {
            question: {
                type: String,
                required: true,
            },
            options: [
                {
                    option: {
                        type: String,
                        required: true,
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true,
                    },
                }
            ],
        }
    ]
},{
    timestamps: true
});

const Quiz = mongoose.models.Quiz||mongoose.model('Quiz', quizSchema);

export default Quiz;