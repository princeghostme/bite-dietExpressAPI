import { NextFunction, Request, Response } from "express";
import ErrorMangement from "../Utility/ErrorManagement";
import { AppResponse, myAppRes } from "../Utility/appResponse";

export const helloworld = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await myAppRes(res, new AppResponse().AppResponse({"message":"hello World"}));
    }
    catch{
        next(new ErrorMangement().internalServerError());
    }
}