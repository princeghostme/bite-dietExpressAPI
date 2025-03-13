"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorMangement {
    constructor() {
        this.message = "Something went wrong";
        this.statusCode = 500;
        this.name = "Bad request";
    }
    // constructor() {
    //     this.message = 
    // }
    BadRequest(message = "Bad Request") {
        this.message = message;
        this.statusCode = 404;
        return this;
    }
    UnautoiseAccess(message = "Unauthorised Access") {
        this.message = message;
        this.statusCode = 401;
        return this;
    }
    internalServerError(message = "internal Server Error") {
        this.message = message;
        this.statusCode = 500;
        return this;
    }
}
exports.default = ErrorMangement;
