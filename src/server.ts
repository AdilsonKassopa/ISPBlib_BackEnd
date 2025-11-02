import express from "express";
const app = express()
import { userRouter } from './modules/users/routes.ts'
import cors from "cors";

const corsOption = {
    origin:'*',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}


app.use(express.json())
app.use(cors(corsOption))
app.use("/users",userRouter)

app.listen(3000, () => console.log('the server is running in port 3000'))