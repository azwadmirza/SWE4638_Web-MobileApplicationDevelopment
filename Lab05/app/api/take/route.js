import { NextResponse } from "next/server";
import connect from "../../lib/connector";
import Result from "../../models/result.model";

export async function POST(req){
    try{
        await connect();
        const data=await req.json();
        const {id,email,results,time}=data;
        const existingResults=await Result.findOne({quizId:id,email});
        if(existingResults){
            existingResults.results=results;
            existingResults.time=time;
            await existingResults.save();
            return NextResponse.json({result,success:true});
        }
        else{
            const result=await Result.create({quizId:id,email,results,time});
            return NextResponse.json({result,success:true});
        }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}

export async function GET(req){
    try{
        const {searchParams}=new URL(req.url);
        const email=searchParams.get('email');
        const limit=searchParams.get('limit');
        await connect();
        const results=await Result.find({email:email}).limit(parseInt(limit));
        return NextResponse.json({results,success:true});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}