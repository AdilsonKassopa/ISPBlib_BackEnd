import express from "express";
const app = express()
import path from 'path';

import { userRouter } from './modules/users/routes.ts'
import cors from "cors";
import { categoryRouter } from "./modules/categorias/routes.ts";
import { activityRouter } from "./modules/activity/routes.ts";
import { bookRouter } from "./modules/books/routes.ts";
import { statusRouter } from "./modules/status/routes.ts";
import { autorRouter } from "./modules/Autor/routes.ts";

const corsOption = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    exposedHeaders: 'Content-Length,Content-Type',
    credentials: false,
    optionsSuccessStatus: 200
}


app.use(express.json())
// app.use(express.urlencoded({ extended: true }))  // Removido para evitar conflito com Multer em rotas multipart
app.use(cors(corsOption))
app.use('/files', express.static('uploads'))
app.use("/users",userRouter)
app.use('/category',categoryRouter)
app.use('/activity',activityRouter)
app.use('/book',bookRouter)
app.use('/status',statusRouter)
app.use('/autor',autorRouter)




// Error handler para capturar erros de middlewares como Multer
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Erro no servidor:', err);
  res.status(500).json({ error: err.message || 'Erro interno do servidor' });
});

app.listen(3000, () => console.log('the server is running in port 3000'))