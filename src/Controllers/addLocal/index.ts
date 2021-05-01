import { Request, Response } from "express"

import validation from "./validation"
import addLocalService from "../../Services/addLocal"
import Local from "../../Types/Locals"

export default function addLocal(req: Request, res: Response) {
    try {
        console.log("New add Local Request - " + new Date())
        const local: Local = req.body
        validation(local)
        try {
            res.status(201).json(addLocalService(local))
        }
        catch (error) {
            console.log(`Adding local failed: Error: ${error.message} - ${new Date()}`)
            res.status(500).json({ message: "Internal server error. Please contact the admim." })
        }
    }
    catch (error) {
        console.log(`Request validation failed: ${error.message} - ${new Date()}`)
        res.status(error.code).json({ message: error.message })
    }
}