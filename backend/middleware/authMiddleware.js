import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import Users from "../models/usersModel.js"

const protectRoute = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

      req.userDetails = await Users.findById(decodedToken.id).select(
        "-password"
      )

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("Not authorized, token failed")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, no token")
  }
})

export { protectRoute }
