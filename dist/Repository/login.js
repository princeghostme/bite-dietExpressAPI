"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = (mongoose_1.default.Schema);
const userLogin = new schema({
    userid: { String, required: true },
    password: { String, required: true }
});
exports.default = mongoose_1.default.model("login", userLogin);
