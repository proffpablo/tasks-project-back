import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from "./routes/tasks.routes.js"; 

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: [
        'https://tasks-fullstack-front.onrender.com',
        'https://tasks-fullstack-front.onrender.com/'
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: 'Authorization',
}));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;