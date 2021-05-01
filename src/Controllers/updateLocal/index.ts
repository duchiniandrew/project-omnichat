import { Request, Response } from "express"

import updateLocalService from "../../Services/updateLocal"
import Locals from "../../Types/Locals"
import validation from "./validation"

export default function updateLocal(req: Request, res: Response) {
    try {
        console.log("New update Local Request - " + new Date())
        const local: Locals = req.body
        validation(local)
        try {
            res.status(200).json(updateLocalService(local))
            console.log("Local successfully updated - " + new Date())
        }
        catch (error) {
            console.log(`Update local failed: Error: ${error.message} - ${new Date()}`)
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        console.log(`Request validation failed:  ${error.message} - ${new Date()}`)
        res.status(error.code).json({ message: error.message })
    }
}