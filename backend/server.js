import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import dbConnection from "./config/dbConnection.js"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, errorMessage } from "./middleware/errorMiddleware.js"

dotenv.config()

// Init Server
const app = express()

// Database
dbConnection()

// Middleware who allows to give data to the server
app.use(express.json())

// Routes
app.use("/api/users", userRoutes)

// Middleware - error handler
app.use(errorMessage)
app.use(errorHandler)

const PORT = process.env.PORT

// Listen Server
app.listen(PORT, () => {
  console.log(
    `The server is in ${process.env.TYPE} MODE and running on PORT ${PORT}!`
      .yellow.bold
  )
})
