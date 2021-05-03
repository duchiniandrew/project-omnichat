import { Request, Response } from "express"

import validation from "./validation"
import authService from "../../Services/authenticate"
import User from "../../Types/User"

export default function authentication(req: Request, res: Response) {
    try {
        const user: User = req.body
        validation(user)
        try {
            res.status(200).json({ token: authService(user) })
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}