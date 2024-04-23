import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

userSchema.statics.signup=async function(email,password,username){
    const salt=await bcrypt.genSalt();
    const hashed=await bcrypt.hash(password,salt);
    const user=await this.create({email,password:hashed,username});
    return user;
}

userSchema.statics.login=async function(email,password){
    const user=await this.findOne({email});
    if(user){
        const auth=await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('Incorrect Password');
    }
    throw Error('Incorrect Email');
}

const User = mongoose.models.User||mongoose.model('User', userSchema);

export default User;