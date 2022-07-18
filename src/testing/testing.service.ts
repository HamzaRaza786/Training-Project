import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './testing.model';

@Injectable()
export class TestingService {
  constructor(@InjectModel('User') private readonly userModel:Model<User>){}


   insertUser= async(name: string, occupation: string, age: number) => {
    const newUser = new this.userModel({name,occupation,age});
    const result = await newUser.save();
    console.log(result._id)
  }

  getUsers = async() =>{
    const result = await this.userModel.find().exec();
    return result;
  }

  getSingleUser = async(productId: string) => {
    const product = await this.userModel.findById(productId);
    return product;
  }

  updateUser = async(id:string, name: string, occupation: string,age: number) => {
    const user = await this.userModel.findById(id);
    if (name) {
      user.name = name;
    }
    if (occupation) {
      user.occupation = occupation;
    }
    if (age) {
      user.age = age;
    }
    user.save();
  }

  deleteProduct = async(userId: string) => {
      const user_temp = await this.userModel.deleteOne({_id:userId}).exec();
      if(user_temp.deletedCount === 0){
        throw new NotFoundException("Could not find user");
      }
      return "User deleted"
  }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.user.findIndex(prod => prod.id === id);
  //   const product = this.user[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find product.');
  //   }
  //   return [product, productIndex];
  // }
}