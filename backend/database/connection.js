const { default: mongoose } = require('mongoose')
const mognoose = require('mongoose')


const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.log("MongoDB ERROR", error)
        process.exit(1)
    }
}

module.exports = connectDB