import { Request, Response } from "express"

import addUserService from "../../Services/addUser"
import validation from "./validation"
import User from "../../Types/User"

export default function addUser(req: Request, res: Response) {
    try {
        const newUser: User = req.body
        validation(newUser)
        try {
            res.status(201).json({ message: addUserService(newUser) })
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error. Please contact the admim." })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}