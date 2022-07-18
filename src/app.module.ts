import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { TestingModule } from './testing/testing.module';
@Module({
  imports: [MongooseModule.forRoot(
    `mongodb+srv://Hamza:${process.env.PASSWORD}@cluster0.nwy6m.mongodb.net/Testing?retryWrites=true&w=majority`
  ), TestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
