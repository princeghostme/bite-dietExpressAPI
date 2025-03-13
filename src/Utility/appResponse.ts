import { randomUUID } from "crypto";
import { Response } from "express";
export class AppResponse{
    reqid:string =  randomUUID().toString()
    data: any = null;
    error:any = null
    message:string = "Failed";
    success:boolean = false;

    AppErrorResponse(data:any){
        this.error = data
        this.message = "Failed"
        this.success = false;

        return this;
    }

    AppResponse(data:any){
        this.data = data;
        this.message = "Success";
        this.success = true;
        return this;
    }
    
}

export const myAppRes =  async (res:Response,data:any,code:number = 200)=>{
    res.status(code).json(data)
}