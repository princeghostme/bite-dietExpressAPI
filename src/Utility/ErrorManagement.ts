import { Http2ServerResponse } from "node:http2";
import { AppError } from "./errorHandlingMiddlware";

export default class ErrorMangement implements AppError {
    message: string = "Something went wrong";
    statusCode?: number = 500;
    name: string = "Bad request";
    stack?: string | undefined;
    BadRequest(message: string = "Bad Request") {
        this.message = message;
        this.statusCode = 404;
        return this;
    }
    UnautoiseAccess(message: string = "Unauthorised Access") {
        this.message = message;
        this.statusCode = 401;
        return this;
    }
    internalServerError(message: string = "internal Server Error") {
        this.message = message;
        this.statusCode = 500;
        return this;
    }

}

