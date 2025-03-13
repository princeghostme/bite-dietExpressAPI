import { NextFunction, Request, Response } from "express";
import usersMongo from "../Repository/usersMongo";
import { AppResponse, myAppRes } from "../Utility/appResponse";
import { Error } from "mongoose";
import ErrorMangement from "../Utility/ErrorManagement";
import { user } from "../Model/User";

export const users = async (req: Request, res: Response, next: NextFunction) => {
    try {
        var requestData:user = req.body;
        var data = await usersMongo.findOneAndUpdate(
            {email : requestData.email},
            requestData,
            {new:true,upsert:true}
        );
        await data.save();
        await myAppRes(res,new AppResponse().AppResponse(data));
    }
    catch (err) {
        next(err);
    }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("getting all users");
        const data = await usersMongo.find();
        console.log(data);
        await myAppRes(res,new AppResponse().AppResponse(data));
    }
    catch (err) {
        next(err);

    }
}