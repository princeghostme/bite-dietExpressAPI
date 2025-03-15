import { NextFunction, Request, Response } from "express";
import { AppResponse, appRes } from "./appResponse";
import ErrorMangement from "./ErrorManagement";

export class AppError extends Error {
    statusCode?: number = 200;
}

export default async (error: AppError, req: Request, res: Response, next: NextFunction) => {
    const errorcode = error.statusCode || 500;
    switch (errorcode.toString()) {
        case "500": {
            await appRes({
                res: res,
                data: new AppResponse().AppErrorResponse(new ErrorMangement().BadRequest(error.message)),
                code: error.statusCode
            });
            break;
        }
        default: {
            var defaultError = new ErrorMangement().internalServerError(error.message);
            var data = new AppResponse().AppErrorResponse(defaultError);
            await appRes({
                res: res,
                data: data,
                code: error.statusCode
            });
        }
    }


}