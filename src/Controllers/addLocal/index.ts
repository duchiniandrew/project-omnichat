import { Request, Response } from "express"

import validation from "./validation"
import addLocalService from "../../Services/addLocal"
import { Local } from "../../Types/Locals"

export default function addLocal(req: Request, res: Response) {
    try {
        const local: Local = req.body
        validation(local)
        try {
            res.status(201).json({ message: addLocalService(local) })
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error. Please contact the admim." })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}