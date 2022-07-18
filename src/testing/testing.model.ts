import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    occupation:String,
    age:{type:Number,required:true},
});
export interface User{
    name:string;
    occupation:string;
    age:number;   
}

