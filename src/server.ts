import express from "express";
const app = express()
import { userRouter } from './modules/users/routes.ts'
import cors from "cors";

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

app.listen(3000, () => console.log('the server is running in port 3000'))