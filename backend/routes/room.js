import express, { Router } from 'express';

// Controllers
import { addRoom, getRooms, updateRoomState, updateRoomStateDone, getAllRooms } from '../controllers/room.js';

const router = express.Router();

router.post('/add', addRoom);
router.get('/getRooms',getRooms);
router.get('/getAllRooms', getAllRooms)
router.post('/updateRoomState', updateRoomState);
router.post('/updateRoomStateDone', updateRoomStateDone);


export default router;