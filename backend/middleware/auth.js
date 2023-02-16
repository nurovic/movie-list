const jwt = require('jsonwebtoken')
const UserDB = require('../models/UserModel')

const check = async(req,res, next) => {
    let token
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await UserDB.findById(decoded.id).select("-password")

            next()

        } catch (error) {
            console.log("check auth error", error)
            res.status(401)
        }
    }
    if(!token){
        res.status(401)
        console.log("No Token")
    }
}

module.exports = {check}