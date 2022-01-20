const express = require("express")
import bodyParser from "body-parser"
import { MongoClient } from "mongodb"
import authRoutes from "./src/routes/auth"
import postRoutes from "./src/routes/post"
import userRoutes from "./src/routes/user"
const cors = require("cors")
const path = require('path')

const connectionString = `mongodb+srv://Tolulope:Tolulopeoduro2002@workforce-v2.iy6ag.mongodb.net/workforce-v2?retryWrites=true&w=majority`


const app = express()

app.use(bodyParser.json())
app.use(cors({origin : "*"}))

app.use('/images', express.static('images'));


MongoClient.connect(connectionString  , ((err , client) => {
    if (err) {
    }
    app.locals.db = client
    app.listen(process.env.PORT || 4000)
}))




app.use("/auth" , authRoutes)
app.use("/users" , userRoutes)
app.use("/post" , postRoutes)       