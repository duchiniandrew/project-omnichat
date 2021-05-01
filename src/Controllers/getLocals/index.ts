import { Request, Response } from "express"

import getLocalsService from "../../Services/getLocals"

export default function getLocals(req: Request, res: Response) {
    try {
        console.log("New get Locals Request - " + new Date())
        res.status(200).json(getLocalsService())
        console.log("Successfully get local list - " + new Date())
    }
    catch (error) {
        console.log(`Get locals list failed: Error: ${error.message} - ${new Date()}`)
        res.status(500).json({ message: "Internal server error. Please contact the admim." })
    }
}