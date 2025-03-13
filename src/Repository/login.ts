import mongoose from "mongoose";
import { login } from "../Model/Login";

const schema = mongoose.Schema<login>;

const userLogin = new schema({
    userid: {String, required :true},
    password: {String,required:true}
})

export default mongoose.model("login",userLogin);