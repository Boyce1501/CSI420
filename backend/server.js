import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import foodRouter from "./routes/foodRoute.js"
import { connectDB } from "./config/db.js"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connetion
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://staremosh:Password1@cluster0.r3snr3k.mongodb.net/?