"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    occupation: String,
    age: { type: Number, required: true },
});
//# sourceMappingURL=testing.model.js.map