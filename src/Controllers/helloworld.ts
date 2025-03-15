import { NextFunction, Request, Response } from "express";
import ErrorMangement from "../Utility/ErrorManagement";
import { AppResponse, appRes } from "../Utility/appResponse";

export const helloworld = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await appRes({
            res: res,
            data: new AppResponse().AppResponse({ "message": "hello World" })
        });
    }
    catch {
        next(new ErrorMangement().internalServerError());
    }
}