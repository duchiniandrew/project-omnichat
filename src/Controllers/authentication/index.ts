import { Request, Response } from "express"

import validation from "./validation"
import authService from "../../Services/authenticate"
import User from "../../Types/User"

export default function authentication(req: Request, res: Response) {
    try {
        console.log("New authentication Request - " + new Date())
        const user: User = req.body
        validation(user)
        try {
            res.status(200).json(authService(user))
            console.log(`User ${user.email} successfully authenticated. - ${new Date()}`)
        }
        catch (error) {
            console.log("user wronged email or password - " + new Date())
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        console.log(`Request validation failed: ${error.message} - ${new Date()}`)
        res.status(error.code).json({ message: error.message })
    }
}