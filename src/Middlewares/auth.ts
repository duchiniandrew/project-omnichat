import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import getUser from "../Services/getUser"
import User from "../Types/User"

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
    console.log("Checking request authorization token - " + new Date())
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        console.log("Request without token - " + new Date())
        return res.status(401).json({ message: "Unauthorized User." })
    }
    const user = jwt.decode(token) as User
    console.log("Checking if request is from an existing user. - " + new Date())
    if (getUser(user.id)) {
        console.log("Authentication OK generating token... - " + new Date())
        jwt.verify(token, process.env.SECRET as string, (error: any, user: any) => {
            if (error) {
                console.log("Error while generating access token - " + new Date())
                return res.status(401).json({ message: "User not authenticated" })
            }
            console.log("Authentication success. - " + new Date())
            next()
        })
    }
    else {
        console.log("Request is from a nonexistent user - " + new Date())
        return res.status(401).json({ message: "User not authenticated" })
    }
}