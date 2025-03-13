import { NextFunction, Request, Response } from "express";
import {AppResponse, myAppRes} from "./appResponse";
import ErrorMangement from "./ErrorManagement";

export class AppError extends Error {
    statusCode?: number = 200;
}

export default async (error:AppError,req:Request,res:Response,next:NextFunction) => {
    const errorcode = error.statusCode || 500;
    switch(errorcode.toString()){
        case "500" :{
            await myAppRes(res,new AppResponse().AppErrorResponse(new ErrorMangement().BadRequest(error.message)),error.statusCode); 
            break;
        }
        default: {
            var defaultError = new ErrorMangement().internalServerError(error.message);
            var data = new AppResponse().AppErrorResponse(defaultError);
            await myAppRes(res,data,error.statusCode);
        }
    }

    
}