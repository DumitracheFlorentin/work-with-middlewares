import express from "express"
import dotenv from "dotenv"
import colors from "colors"

dotenv.config()

// Init Server
const app = express()

// Middleware
app.use(express.json())

const PORT = process.env.PORT

// Listen Server
app.listen(PORT, () => {
  console.log(
    `The server is in ${process.env.TYPE} MODE and running on PORT ${PORT}!`
      .yellow.bold
  )
})
