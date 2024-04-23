import { NextResponse } from "next/server";
import connect from "../../../lib/connector";
import User from "../../../models/user.model";
import { getAccessToken, getRefreshToken } from "../../../lib/token";

export async function POST(req){
    try{
        await connect();
        const data=await req.json();
        const {email,password,rememberMe}=data;
        const user=await User.login(email,password);
        const access=await getAccessToken(req.headers,user);
        const refresh=await getRefreshToken(req.headers,user);
        if(rememberMe){
            return NextResponse.json({access,refresh,email,username:user.username})
        }
        else{
            return NextResponse.json({access,email,username:user.username})
        }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({err:err})
    }
}