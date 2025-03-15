import { NextFunction, Request, Response } from "express";
import { AppResponse, appRes } from "../Utility/appResponse";
import errorHandlingMiddlware from "../Utility/errorHandlingMiddlware";

export const apikey = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.headers["apikey"] == "prince") {
            await next();
        }
        else {
            appRes({
                res: res,
                data: new AppResponse().AppErrorResponse({ error: "api key is required" })
            });
        }
    }
    catch (err) {
        await next(err);
    }
}