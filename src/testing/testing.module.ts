import {Module} from '@nestjs/common';
import {TestingController} from './testing.controller';
import {TestingService} from './testing.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from './testing.model';
@Module({
    imports:[MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
    controllers:[TestingController],
    providers:[TestingService]
})
export class TestingModule{}