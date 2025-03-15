import mongoose, { Document } from "mongoose";
import { common } from "./common";

export interface user extends common,Document {
    code:string;
    f_name: string;
    m_name: string;
    l_name: string;
    dob: string;
    address1:string;
    address2:string;
    age:number;
    weight:number;
    phone: string;
    email: string;
    password:string;
    typeOfRecommendation:number;
    dietHabit:string;
    doctorsPrescription:string[];
    diseases:string[];
    allergies:string[];
    medications:string[];
    manangerId?: mongoose.Types.ObjectId;
    
}

