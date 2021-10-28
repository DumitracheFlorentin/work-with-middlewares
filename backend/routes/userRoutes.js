import express from "express"
import {
  getAllUsers,
  getSpecificUser,
  registerUser,
  loginUser,
  updateUser,
  detailsUser,
} from "../controllers/userControllers.js"

import { protectRoute } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getAllUsers)
router.route("/:id").get(getSpecificUser).patch(updateUser)
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/profile/details").get(protectRoute, detailsUser)

export default router
