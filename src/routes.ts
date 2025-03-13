import e from "express";
import { helloworld } from "./Controllers/helloworld";
import { getAllUsers, users } from "./Controllers/users";

const routes = e.Router();

routes.get("/",helloworld);
routes.get("/allUsers",getAllUsers);
routes.post("/user",users);

export default routes;