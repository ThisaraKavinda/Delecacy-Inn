import express, { Router } from 'express';

// Controllers
import { addRoom } from '../controllers/room.js';

const router = express.Router();

router.post('/add', addRoom);


export default router;