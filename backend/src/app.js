import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import JournalRouter from './routes/journal.route.js'
dotenv.config()
import {jsonFileSizeLimit, apiUrlPrefix} from "./constants.js"
import {UserRouter} from "./routes/index.js"

const app = express()

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit: jsonFileSizeLimit}))
app.use(`${apiUrlPrefix}/user`, UserRouter)
app.use(`${apiUrlPrefix}/journal`, JournalRouter)

app.get("/", (req,res)=>res.send("OK"))

export default app