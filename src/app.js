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
        'http://localhost:5173',
        'http://localhost:5173/login',
        'http://localhost:5173/register',
        'http://localhost:5173/tasks',
        'http://localhost:5173/verify',
    ],
    credentials: true,
    exposedHeaders: 'Authorization',
}));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;