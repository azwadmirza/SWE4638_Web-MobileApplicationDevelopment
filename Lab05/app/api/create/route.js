import { NextResponse } from "next/server";
import connect from "../../lib/connector";
import Quiz from "../../models/quiz.model";

export async function POST(req){
    try{
        await connect();
        const data=await req.json();
        const { title, questions,author,time }=data;
        const quiz=await Quiz.create({ title, questions,author,time });
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}