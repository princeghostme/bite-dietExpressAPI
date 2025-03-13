import mongoose from "mongoose";
import { user } from "../Model/User";


const passwordGenrator:()=>string = ()=>{
    let randomPassowrd:string = "";
    const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let length:number = 9;
    for(let i = 0 ; i<= length; i++){
        let randomnumber = Math.floor(Math.random() * characters.length);
        randomPassowrd += characters[randomnumber]; 
    }
    return randomPassowrd
}

const schema = mongoose.Schema<user>;

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

export default mongoose.model('User', userSchema);