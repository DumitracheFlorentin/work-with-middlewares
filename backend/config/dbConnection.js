import mongoose from "mongoose"

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log("Database is connected!".green.bold)
  } catch (error) {
    console.log(error.red)
  }
}

export default dbConnection
