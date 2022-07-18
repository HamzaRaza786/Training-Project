import { Model } from 'mongoose';
import { User } from './testing.model';
export declare class TestingService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser: (name: string, occupation: string, age: number) => Promise<void>;
    getUsers: () => Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSingleUser: (productId: string) => Promise<import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser: (id: string, name: string, occupation: string, age: number) => Promise<void>;
    deleteProduct: (userId: string) => Promise<string>;
}
