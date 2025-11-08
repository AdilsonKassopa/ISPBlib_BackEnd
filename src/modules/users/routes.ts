import { Router } from "express";
import { UserController } from "./users.controller.ts";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/",userController.create)
userRouter.delete("/delete",userController.delete)
userRouter.post("/login",userController.login)
userRouter.put("/updatePassword",userController.updatePassword)
userRouter.get("/findUser",userController.findUser)


export {userRouter}
