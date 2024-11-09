import {Router} from "express";
import {getTopScore,getTopStreak} from '../controllers/user.controller.js';
const router = Router()

// handling requests
router.get("/getTopScore",getTopScore);
router.get("/getTopStreak",getTopStreak);

export default router