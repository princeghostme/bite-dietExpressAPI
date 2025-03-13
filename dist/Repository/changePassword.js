"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = (mongoose_1.default.Schema);
const changePassword = new schema({
    userId: { Number, required: true },
    oldPassword: { String, required: true },
    newPassword: { String, required: true },
    confirmPassword: { String, required: true }
});
exports.default = mongoose_1.default.model("password", changePassword);
