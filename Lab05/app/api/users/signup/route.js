import { NextResponse } from "next/server";
import connect from "../../../lib/connector";
import User from "../../../models/user.model";
import { getAccessToken } from "../../../lib/token";

export async function POST(req){
    try{
        await connect();
        const data=await req.json();
        const {email,password,username}=data;
        const user=await User.signup(email,password,username);
        const access=await getAccessToken(req.headers,user);
        return NextResponse.json({access,email,username})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}