"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const errorHandlingMiddlware_1 = __importDefault(require("./Utility/errorHandlingMiddlware"));
const mongoUsers_1 = __importDefault(require("./DbContext/mongoUsers"));
const appResponse_1 = require("./Utility/appResponse");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, mongoUsers_1.default)();
app.use("/api", routes_1.default);
app.use(errorHandlingMiddlware_1.default);
app.get("/", (req, res) => {
    (0, appResponse_1.myAppRes)(res, { data: "user Service Started" });
});
app.listen(port, () => {
    console.log(`app running at port: ${port}`);
});
