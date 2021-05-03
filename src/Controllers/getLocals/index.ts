import { Request, Response } from "express"

import getLocalsService from "../../Services/getLocals"

export default function getLocals(req: Request, res: Response): void {
    try {
        res.status(200).json(getLocalsService())
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error. Please contact the admim." })
    }
}