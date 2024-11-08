import app from "./app.js"
import {createServer} from "http"
import connect from "./connectToDB.js"

const server = createServer(app)

connect()
.then(()=>{
    server.listen(process.env.PORT, ()=>console.log(`Server is live at http://localhost:${process.env.PORT}`))
})
.catch(error => console.log(error.message))