import Express from "express"
import { json } from "body-parser"

import Logger from "../lib/logger"
import morganMiddleware from "../Middlewares/morgan"
import authMiddleware from "../Middlewares/auth"
import authenticate from "../Controllers/authentication"

import addUser from "../Controllers/addUser"

import addLocal from "../Controllers/addLocal"
import deleteLocal from "../Controllers/deleteLocal"
import getLocals from "../Controllers/getLocals"
import updateLocal from "../Controllers/updateLocal"

import { serve, setup } from 'swagger-ui-express'
import * as swaggerFile from "../api-spec.json"

const app = Express()
app.use(json())
app.use()

export default function routes() {

    app.get("/logger", (req, res) => {
        Logger.error("This is an error log");
        Logger.warn("This is a warn log");
        Logger.info("This is a info log");
        Logger.http("This is a http log");
        Logger.debug("This is a debug log");
    })
    app.use('/api/docs', serve, setup(swaggerFile));

    app.post("/api/v1/addLocal", authMiddleware, addLocal)
    app.get("/api/v1/getLocals", authMiddleware, getLocals)
    app.delete("/api/v1/deleteLocal/:id", authMiddleware, deleteLocal)
    app.put("/api/v1/updateLocal", authMiddleware, updateLocal)

    app.post("/api/v1/addUser", addUser)
    app.post("/api/v1/authenticate", authenticate)

    app.listen(process.env.PORT || 3001)
}