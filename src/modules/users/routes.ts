import { Router } from "express";
import { UserController } from "./users.controller.ts";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/create",userController.create)
userRouter.get("/",userController.get)
userRouter.delete("/delete",userController.delete)
userRouter.post("/login",userController.login)
userRouter.put("/updatePassword",userController.updatePassword)
userRouter.put("/update",userController.update)
userRouter.post("/findUser",userController.findUser)


export {userRouter}
