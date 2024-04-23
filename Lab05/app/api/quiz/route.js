import { NextResponse } from "next/server";
import connect from "../../lib/connector";
import Quiz from "../../models/quiz.model";

export async function GET(req){
    try{
        await connect();
        const {searchParams}=new URL(req.url);
        const limit=searchParams.get('limit');
        const quiz=await Quiz.find().select('_id title author time').limit(parseInt(limit));
        return NextResponse.json({ quiz,success:true });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}