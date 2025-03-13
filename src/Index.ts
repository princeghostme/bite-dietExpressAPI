import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import errorHandlingMiddlware from "./Utility/errorHandlingMiddlware";
import mongoUsers from "./DbContext/mongoUsers";
import { myAppRes } from "./Utility/appResponse";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
mongoUsers();

app.use("/",(req:Request, res:Response)=>{
    myAppRes(res,{data:"Service Started"})
});
app.use("/api",routes);
app.use(errorHandlingMiddlware);

app.listen(port,()=>{
    console.log(`app running at port: ${port}`)
})