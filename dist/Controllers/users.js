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
exports.getAllUsers = exports.users = void 0;
const usersMongo_1 = __importDefault(require("../Repository/usersMongo"));
const appResponse_1 = require("../Utility/appResponse");
const users = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var requestData = req.body;
        var data = yield usersMongo_1.default.findOneAndUpdate({ email: requestData.email }, requestData, { new: true, upsert: true });
        yield data.save();
        yield (0, appResponse_1.myAppRes)(res, new appResponse_1.AppResponse().AppResponse(data));
    }
    catch (err) {
        next(err);
    }
});
exports.users = users;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("getting all users");
        const data = yield usersMongo_1.default.find();
        console.log(data);
        yield (0, appResponse_1.myAppRes)(res, new appResponse_1.AppResponse().AppResponse(data));
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
