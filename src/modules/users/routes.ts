import { Router } from "express";
import { UserController } from "./users.controller.ts";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/",userController.create)


export {userRouter}
