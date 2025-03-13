import mongoose from "mongoose";
import { newPassword } from "../Model/Login";

const schema = mongoose.Schema<newPassword>;

const changePassword = new schema({
    userId : {Number, required:true},
    oldPassword: { String, required: true },
    newPassword: { String, required: true },
    confirmPassword: { String, required: true }
})


export default mongoose.model("password",changePassword);