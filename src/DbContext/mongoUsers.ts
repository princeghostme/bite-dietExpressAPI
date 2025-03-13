import mongoose from "mongoose";

let url = "mongodb+srv://yaduvanshiprince2007:7jhEXDlhEIVdKETg@cluster0.myqck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoUser = async () => {
    try {
        await mongoose.connect(url,{
            dbName : "Users"
        });
        console.info("Connected to mongo successfully")
    }
    catch (error) {
        console.error("Unable to connect to Users mongo Db");
    }
}

export default mongoUser;