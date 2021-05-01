import { Request, Response } from "express"

import addUserService from "../../Services/addUser"
import validation from "./validation"
import User from "../../Types/User"

export default function addUser(req: Request, res: Response) {
    try {
        console.log("New add User Request - " + new Date())
        const newUser: User = req.body
        validation(newUser)
        try {
            res.status(201).json(addUserService(newUser))
            console.log("User successfully added. - " + new Date())
        }
        catch (error) {
            console.log(`Adding user failed: Error: ${error.message} - ${new Date()}`)
            res.status(500).json({ message: "Internal server error. Please contact the admim." })
        }
    }
    catch (error) {
        console.log(`Request validation failed: ${error.message} - ${new Date()}`)
        res.status(error.code).json({ message: error.message })
    }
}