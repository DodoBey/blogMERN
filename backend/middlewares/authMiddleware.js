const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]

            //Decrypt token id

            const decrypted = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decrypted.id).select("-password")

            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized, token failed")
        }
    }

    res.status(401)
    throw new Error("Not Authorized, no token")
})

module.exports = { protect }