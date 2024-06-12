const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const {ornamentmodel} =  require("./models/ornament")

mongoose.connect("mongodb+srv://Jafna02:jafna9074@cluster0.icijy.mongodb.net/ornamentsDb?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(express.json())
app.use(cors())

app.post("/add",(req,res)=>{
    let input = req.body
    let ornament = new ornamentmodel(input)
    ornament.save()
    res.json({"status":"successs"})
})

app.post("/view",(req,res)=>{
    ornamentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/search",(req,res)=>{
    let input = req.body
    ornamentmodel.find(input).then(
                 (data)=>{
       res.json(data)
         }
     ).catch((error)=>{
         res.json(error)
     })
 })

app.listen(8080,()=>{
    console.log("server started")
})