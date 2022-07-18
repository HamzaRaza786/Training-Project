"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TestingService = class TestingService {
    constructor(userModel) {
        this.userModel = userModel;
        this.insertUser = async (name, occupation, age) => {
            const newUser = new this.userModel({ name, occupation, age });
            const result = await newUser.save();
            console.log(result._id);
        };
        this.getUsers = async () => {
            const result = await this.userModel.find().exec();
            return result;
        };
        this.getSingleUser = async (productId) => {
            const product = await this.userModel.findById(productId);
            return product;
        };
        this.updateUser = async (id, name, occupation, age) => {
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
        };
        this.deleteProduct = async (userId) => {
            const user_temp = await this.userModel.deleteOne({ _id: userId }).exec();
            if (user_temp.deletedCount === 0) {
                throw new common_1.NotFoundException("Could not find user");
            }
            return "User deleted";
        };
    }
};
TestingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestingService);
exports.TestingService = TestingService;
//# sourceMappingURL=testing.service.js.map