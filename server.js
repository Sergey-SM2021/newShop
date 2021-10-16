const express = require('express')
const mongoose = require('mongoose')

const app = express()

async const connectMongoDB = () => {
    try {
        await mongoose.connect("mongodb+srv://sergey:sergey2003@cluster0.zifbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    } catch (error) {
        console.log("error", error.message)
        process.exit(1)
    }
}

connectMongoDB()

app.listen(8000, () => { console.log("Сервер был запущен") })