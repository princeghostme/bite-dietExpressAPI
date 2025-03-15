import { randomUUID } from "crypto";
import { Response } from "express";

export class AppResponse {
    reqid: string = randomUUID().toString()
    data: any = null;
    error: any = null
    message: string = "Failed";
    success: boolean = false;

    AppErrorResponse(data: any) {
        this.error = data
        this.message = "Failed"
        this.success = false;

        return this;
    }

    AppResponse(data: any) {
        this.data = data;
        this.message = "Success";
        this.success = true;
        return this;
    }

}

export interface IAppRes {
    res: Response;
    data: any;
    code?: number;
    time?: number;
}

export const appRes: (response: IAppRes) => Promise<void> = async ({ res, data, code = 200 }) => {
    await res.status(code).json(data)
}


export const appCookie: (response: IAppRes) => Promise<void> = async ({ res, data, code = 200, time = 1 }) => {

    await res.status(code).cookie("userAuth", data, {
        httpOnly: true,
        maxAge: 3600000 * time
    })
}