import { Router } from "express";
import { StatusController } from "./status.controller";
const statusRouter = Router()

const statusController = new StatusController()

statusRouter.get('/',statusController.get)

export {statusRouter}