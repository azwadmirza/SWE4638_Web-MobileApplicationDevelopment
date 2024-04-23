import { NextResponse } from "next/server";
import connect from "../../../../../lib/connector";
import Quiz from "../../../../../models/quiz.model";

export async function DELETE(req,route){
    try{
        await connect();
        const { id,qid,oid } = route.params;
        const quiz=await Quiz.findById(id);
        const questions=quiz.questions.find(question=>question._id==qid);
        questions.options=questions.options.filter(option=>option._id!=oid);
        quiz.questions=questions;
        await quiz.save();
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}