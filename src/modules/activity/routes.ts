import { Router } from "express";
import { ActivityController } from "./activity.controller";

const activityRouter = Router()
const activityController = new ActivityController()

activityRouter.post('/create',activityController.create)
activityRouter.get('/',activityController.get)

export {activityRouter}