import { Request, Response } from "express"

import deleteLocalService from "../../Services/deleteLocal"
import validation from "./validation"

export default function deleteLocal(req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id)
        console.log("New delete Local Request - " + new Date())
        validation(id)
        try {
            res.status(200).json({ message: deleteLocalService(id) })
            console.log("Local successfully deleted - " + new Date())
        }
        catch (error) {
            console.log(`Delete local failed: Error:  ${error.message} - ${new Date()}`)
            res.status(500).json({ message: "Internal error" })
        }
    }
    catch (error) {
        console.log(`Request validation failed: ${error.message} - ${new Date()}`)
        res.status(error.code).json({ message: error.message })
    }
}