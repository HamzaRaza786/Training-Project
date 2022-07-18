import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { TestingService } from './testing.service';
  
  @Controller('users')
  export class TestingController {
    constructor(private readonly testingService: TestingService) {}
  
    @Post()
    async addProduct(
      @Body('name') name: string,
      @Body('occupation') occupation: string,
      @Body('age') age: number,
    ) {
      const generatedId = await this.testingService.insertUser(
        name,
        occupation,
        age,
      );
    }
  
    @Get()
    async getAllProducts() {
      return await this.testingService.getUsers();
    }
  
    @Get(':id')
    async getProduct(@Param('id') prodId: string) {
      return await this.testingService.getSingleUser(prodId);
    }
  
    @Patch(':id')
     updateUser(
      @Param('id') id: string,
      @Body('name') name: string,
      @Body('occupation') occupation: string,
      @Body('age') age: number,
    ) {
      this.testingService.updateUser(id, name, occupation, age).then(
        () =>{
          return "User Updated"
        }
      ).catch(err =>{
        return err;
      })
    }
  
    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.testingService.deleteProduct(prodId)
        return {"status":"User Deleted"}
    }
  }