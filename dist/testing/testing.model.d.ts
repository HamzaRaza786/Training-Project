import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name: string;
    age: number;
    occupation?: string;
}>;
export interface User {
    name: string;
    occupation: string;
    age: number;
}
