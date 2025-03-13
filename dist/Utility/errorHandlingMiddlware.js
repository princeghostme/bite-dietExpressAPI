"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const appResponse_1 = require("./appResponse");
const ErrorManagement_1 = __importDefault(require("./ErrorManagement"));
class AppError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 200;
    }
}
exports.AppError = AppError;
exports.default = (error, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errorcode = error.statusCode || 500;
    switch (errorcode.toString()) {
        case "500": {
            yield (0, appResponse_1.myAppRes)(res, new appResponse_1.AppResponse().AppErrorResponse(new ErrorManagement_1.default().BadRequest(error.message)), error.statusCode);
            break;
        }
        default: {
            var defaultError = new ErrorManagement_1.default().internalServerError(error.message);
            var data = new appResponse_1.AppResponse().AppErrorResponse(defaultError);
            yield (0, appResponse_1.myAppRes)(res, data, error.statusCode);
        }
    }
});
