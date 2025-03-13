"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloworld_1 = require("./Controllers/helloworld");
const users_1 = require("./Controllers/users");
const routes = express_1.default.Router();
routes.get("/", helloworld_1.helloworld);
routes.get("/allUsers", users_1.getAllUsers);
routes.post("/user", users_1.users);
exports.default = routes;
