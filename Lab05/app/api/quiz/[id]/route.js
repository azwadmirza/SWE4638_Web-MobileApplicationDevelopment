import { NextResponse } from "next/server";
import connect from "../../../lib/connector";
import Quiz from "../../../models/quiz.model";

export async function GET(req,route){
    try{
        const {id}=route.params;
        await connect();
        const quiz=await Quiz.findById(id);
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}

export async function PATCH(req,route){
    try{
        const {id}=route.params;
        const {title,time,questions}=await req.json();
        await connect();
        const quiz=await Quiz.findById(id);
        quiz.title=title;
        quiz.time=time;
        quiz.questions=questions;
        await quiz.save();
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}