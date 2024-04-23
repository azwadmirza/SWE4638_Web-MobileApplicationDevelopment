import jwt from 'jsonwebtoken';
import Token from '../models/token.model';

export const getAccessToken=(header,payload)=>{
    return jwt.sign({header,payload},process.env.ACCESS_TOKEN,{expiresIn:'2h'});
}

export const verifyAccessToken=(token)=>{
    return jwt.verify(token,process.env.ACCESS_TOKEN);
}

export const getRefreshToken=async(header,payload)=>{
    const token=jwt.sign({header,payload},process.env.REFRESH_TOKEN);
    const existingToken=await Token.findOne({email:payload.email});
    if(existingToken){
        existingToken.token=token;
        existingToken.save();
    }
    else{
        const tokenInstance=new Token({token,email:payload.email});
        tokenInstance.save();
    }
    return token;
}

export const verifyRefreshToken=async(token,email)=>{
    const valid=jwt.verify(token,process.env.REFRESH_TOKEN);
    if(!valid){
        throw Error('Invalid Refresh Token');
    }
    const existingToken=await Token.findOne({email});
    if(existingToken.token!==token){
        return false;
    }
    return true;
}