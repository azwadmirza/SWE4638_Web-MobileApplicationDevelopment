import { NextResponse } from "next/server";
import connect from "../../../lib/connector";
import Quiz from "../../../models/quiz.model";

export async function PATCH(req,route){
    try{
        await connect();
        const { id } = route.params;
        const data=await req.json();
        const {question }=data;
        const quiz=await Quiz.findById(id);
        quiz.questions.push(question);
        await quiz.save();
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}

export async function DELETE(req,route){
    try{
        await connect();
        const { id } = route.params;
        await Quiz.findByIdAndDelete(id);
        return NextResponse.json({ success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}