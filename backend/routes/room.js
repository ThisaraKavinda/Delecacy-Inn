import express, { Router } from 'express';

// Controllers
import { addRoom, getRooms, updateRoomState, updateRoomStateDone } from '../controllers/room.js';

const router = express.Router();

router.post('/add', addRoom);
router.get('/getRooms',getRooms);
router.post('/updateRoomState', updateRoomState);
router.post('/updateRoomStateDone', updateRoomStateDone);


export default router;