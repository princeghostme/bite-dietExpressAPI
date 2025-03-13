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
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAppRes = exports.AppResponse = void 0;
const crypto_1 = require("crypto");
class AppResponse {
    constructor() {
        this.reqid = (0, crypto_1.randomUUID)().toString();
        this.data = null;
        this.error = null;
        this.message = "Failed";
        this.success = false;
    }
    AppErrorResponse(data) {
        this.error = data;
        this.message = "Failed";
        this.success = false;
        return this;
    }
    AppResponse(data) {
        this.data = data;
        this.message = "Success";
        this.success = true;
        return this;
    }
}
exports.AppResponse = AppResponse;
const myAppRes = (res_1, data_1, ...args_1) => __awaiter(void 0, [res_1, data_1, ...args_1], void 0, function* (res, data, code = 200) {
    res.status(code).json(data);
});
exports.myAppRes = myAppRes;
