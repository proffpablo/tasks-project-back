import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {

    const authorization = req.get('Authorization');

    let token = '';

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        req.user = user

        next();
    });
}