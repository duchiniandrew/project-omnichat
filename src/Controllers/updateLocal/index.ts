import { Request, Response } from "express"

import updateLocalService from "../../Services/updateLocal"
import Locals from "../../Types/Locals"
import validation from "./validation"

export default function updateLocal(req: Request, res: Response) {
    try {
        const local: Locals = req.body
        validation(local)
        try {
            res.status(200).json({ message: updateLocalService(local) })
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}