import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
import upload from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name : "img",
            maxCount : 1
        }
    ]),
    registerUser)

export default router     // importing this as an user Router in app.js