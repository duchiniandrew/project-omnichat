import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import getUser from "../Services/getUser"
import User from "../Types/User"

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Unauthorized User." })
    }
    const user = jwt.decode(token) as User
    if (getUser(user.id)) {
        jwt.verify(token, process.env.SECRET as string, (error: any, user: any) => {
            if (error) {
                return res.status(401).json({ message: "User not authenticated" })
            }
            next()
        })
    }
    else {
        return res.status(401).json({ message: "User not authenticated" })
    }
}