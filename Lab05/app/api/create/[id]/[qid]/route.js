import { NextResponse } from "next/server";
import connect from "../../../../lib/connector";
import Quiz from "../../../../models/quiz.model";

export async function DELETE(req,route){
    try{
        await connect();
        const { id,qid } = route.params;
        const quiz=await Quiz.findById(id);
        console.log(quiz.questions);
        quiz.questions=quiz.questions.filter(question=>{
            console.log(question._id,qid);
            return question._id!=qid;
        });
        await quiz.save();
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}

export async function PATCH(req,route){
    try{
        await connect();
        const { id,qid } = route.params;
        const option=await req.json();
        const quiz=await Quiz.findById(id);
        const question=quiz.questions.find(question=>question._id==qid);
        if(!question){
            return NextResponse.json({err:"Question not found"})
        }
        if(question.options.find(opt=>opt.option==option.option)){
            return NextResponse.json({err:"Option already exists"})
        }
        question.options.push(option);
        if(option.isCorrect){
            question.options.forEach(opt=>{
                if(opt.option!==option.option){
                    opt.isCorrect=false;
                }
            });
        }
        await quiz.save();
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}