const errorMessage = (req, res, next) => {
  const error = new Error(`URL Not Found!`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.TYPE === "production" ? null : err.stack,
  })
}

export { errorMessage, errorHandler }
