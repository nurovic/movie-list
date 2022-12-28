const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./database/connection.js')
const cloudinary = require('cloudinary')

const fileUpload = require('express-fileupload')

const { MoviesRoutes } = require("./routes")

const app = express()

dotenv.config({path:'.env'})

app.use(morgan('tiny'))
connectDB()

app.use(bodyparser.urlencoded({extended:true}))
app.use(cors({
    origin:true,
    credentials:true
}))
app.use(fileUpload())
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })
  
app.use("/movies", MoviesRoutes)

app.listen(4000, () => {
    console.log(`Server is running...`)
})