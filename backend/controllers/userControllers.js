import asyncHandler from "express-async-handler"
import Users from "../models/usersModel.js"
import generateToken from "../utils/generateToken.js"

// @Description  - GET ALL USERS
// @Method       - GET
// @Route        - /api/users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await Users.find({})

  res.json(users)
})

// @Description  - GET SPECIFIC USER
// @Method       - GET
// @Route        - /api/users/:id
const getSpecificUser = asyncHandler(async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)

    res.json({
      id: user._id,
      firstname: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (error) {
    throw Error("The user does not exist!")
  }
})

// @Description  - UPDATE USER
// @Method       - PATCH
// @Route        - /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const { firstName, lastName, password } = req.body

    const user = await Users.findById(id)

    user.firstName = firstName ? firstName : user.firstName
    user.lastName = lastName ? lastName : user.lastName
    user.password = password ? password : user.password

    const updatedUser = await user.save()

    res.json(updatedUser)
  } catch (error) {
    throw Error("The user does not exist!")
  }
})

// @Description  - REGISTER
// @Method       - POST
// @Route        - /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const existsUser = await Users.findOne({ email })

  if (!existsUser) {
    if (firstName && lastName && email && password) {
      const newUser = await Users.create({
        firstName,
        lastName,
        email,
        password,
      })

      res.json(newUser)
    } else {
      throw Error("Please complete all fields!")
    }
  } else {
    throw Error("The email is invalid!")
  }
})

// @Description  - LOGIN
// @Method       - POST
// @Route        - /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const existsUser = await Users.findOne({ email })

  if (existsUser) {
    if (await existsUser.matchPassword(password)) {
      res.json({
        id: existsUser._id,
        firstname: existsUser.firstName,
        lastName: existsUser.lastName,
        email: existsUser.email,
        token: generateToken(existsUser._id),
      })
    } else {
      throw Error("The password is invalid!")
    }
  } else {
    throw Error("The email is invalid!")
  }
})

// @Description  - GET PROFILE DETAILS
// @Method       - GET
// @Route        - /api/users/profile/details
const detailsUser = asyncHandler(async (req, res) => {
  try {
    res.json(req.userDetails)
  } catch (error) {
    throw Error("No Valid Token!")
  }
})

export {
  getAllUsers,
  getSpecificUser,
  registerUser,
  loginUser,
  updateUser,
  detailsUser,
}
