import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
    console.log("ACA" + req.headers);
    const {token} = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("token=")).slice(6);
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" }); 

        req.user = user

        next();
    });
}