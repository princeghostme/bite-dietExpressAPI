import mongoose ,{Schema}  from "mongoose";
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
    email: { type: String, required: true, lowercase:true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] },
    password: { type: String, default: passwordGenrator, select :false },
    typeOfRecommendation: { type: Number, required: true },
    dietHabit: String,
    doctorsPrescription: { type: [String], default: [] },
    diseases: { type: [String], default: [] },
    allergies: { type: [String], default: [] },
    medications: { type: [String], default: [] },
    created : {type : Date, default : new Date()},
    modified : {type : Date,default :new Date()},
    manangerId: {type : Schema.Types.ObjectId, ref: "User"}
},{
    collection : "all_Users",
    timestamps : {createdAt: "created", updatedAt : "modified"},
    versionKey : false,
    autoIndex : true,
    toJSON :{
        minimize:true,
        transform : (doc, ret, option)=>{
            delete ret.passowrd
            return ret;
        }
    }
});

userSchema.pre("save",async function(next){
    if(this.isNew){
        this.created = new Date();
        this.modified = new Date();
    }
    if( this.isModified()){
        this.modified = new Date();
    }
    next();
})

export default mongoose.model('User', userSchema);