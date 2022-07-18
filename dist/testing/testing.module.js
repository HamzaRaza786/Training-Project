"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingModule = void 0;
const common_1 = require("@nestjs/common");
const testing_controller_1 = require("./testing.controller");
const testing_service_1 = require("./testing.service");
const mongoose_1 = require("@nestjs/mongoose");
const testing_model_1 = require("./testing.model");
let TestingModule = class TestingModule {
};
TestingModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: testing_model_1.UserSchema }])],
        controllers: [testing_controller_1.TestingController],
        providers: [testing_service_1.TestingService]
    })
], TestingModule);
exports.TestingModule = TestingModule;
//# sourceMappingURL=testing.module.js.map