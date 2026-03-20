import express from "express";
const app = express()
import { userRouter } from './modules/users/routes.ts'
import cors from "cors";
import { categoryRouter } from "./modules/categorias/routes.ts";
import { activityRouter } from "./modules/activity/routes.ts";

const corsOption = {
    origin:'*',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}


app.use(express.json())
app.use(cors(corsOption))
app.use("/user",userRouter)
app.use('/category',categoryRouter)
app.use('/activity',activityRouter)

app.listen(3000, () => console.log('the server is running in port 3000'))