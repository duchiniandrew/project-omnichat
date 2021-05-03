import { Request, Response } from "express"

import deleteLocalService from "../../Services/deleteLocal"
import validation from "./validation"

export default function deleteLocal(req: Request, res: Response): void {
    try {
        const id: number = parseInt(req.params.id)
        validation(id)
        try {
            res.status(200).json({ message: deleteLocalService(id) })
        }
        catch (error) {
            res.status(500).json({ message: "Internal error" })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}