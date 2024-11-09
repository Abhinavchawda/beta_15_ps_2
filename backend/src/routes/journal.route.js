import { Router } from "express";
import {createJournal, recentJournal} from '../controllers/journal.controller.js'
const router = Router();

router.post('/createjournal',createJournal);
router.get('/recentjournal',recentJournal);
export default router;