"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passwordGenrator = () => {
    let randomPassowrd = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let length = 9;
    for (let i = 0; i <= length; i++) {
        let randomnumber = Math.floor(Math.random() * characters.length);
        randomPassowrd += characters[randomnumber];
    }
    return randomPassowrd;
};
const schema = (mongoose_1.default.Schema);
const userSchema = new schema({
    code: { type: String, required: true },
    f_name: { type: String, required: true },
    m_name: String,
    l_name: { type: String, required: true },
    dob: { type: String, required: true },
    address1: String,
    address2: String,
    age: { type: Number, required: true },
    weight: Number,
    phone: String,
    email: { type: String, required: true },
    password: { type: String, default: passwordGenrator },
    typeOfRecommendation: { type: Number, required: true },
    dietHabit: String,
    doctorsPrescription: { type: [String], default: [] },
    diseases: { type: [String], default: [] },
    allergies: { type: [String], default: [] },
    medications: { type: [String], default: [] }
});
exports.default = mongoose_1.default.model('User', userSchema);
