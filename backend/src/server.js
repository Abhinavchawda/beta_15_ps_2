import app from "./app.js"
import {createServer} from "http"

const server = createServer(app)

server.listen(process.env.PORT, ()=>console.log(`Server is live at http://localhost:${process.env.PORT}`))