import {Router} from "express"
import {updateBadgeCount,updateScore,register,login,logout,getCurrentUser,updateUser,createMeditate,getMeditate} from '../controllers/user.controller.js'
const router = Router()

// handling requests
router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.post("/update/score",updateScore)
router.post("/update/badge-count",updateBadgeCount)
router.get("/current",getCurrentUser)
router.put("/updatescore",updateUser);
router.post("/createmeditate",createMeditate);
router.post("/getmeditate",getMeditate);


export default router