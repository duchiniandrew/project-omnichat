import morgan, { StreamOptions } from "morgan"

import Logger from "../lib/logger"

const stream: StreamOptions = {
    write: (message) => Logger.http(message)
}

export default morgan(":method :url :status :res[content-length] - :response-time ms", { stream })