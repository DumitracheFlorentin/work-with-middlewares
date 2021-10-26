import express from "express"
import {
  getAllUsers,
  getSpecificUser,
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/userControllers.js"

const router = express.Router()

router.route("/").get(getAllUsers)
router.route("/:id").get(getSpecificUser).patch(updateUser)
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)

export default router
