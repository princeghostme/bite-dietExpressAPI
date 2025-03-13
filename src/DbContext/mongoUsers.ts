import mongoose from "mongoose";

let url = "mongodb://localhost:27017/Users";

const mongoUser = async () => {
    try {
        await mongoose.connect(url);
        console.info("Connected to mongo successfully")
    }
    catch (error) {
        console.error("Unable to connect to Users mongo Db");
    }
}

export default mongoUser;