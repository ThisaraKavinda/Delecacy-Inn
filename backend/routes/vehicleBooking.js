import express, { Router } from 'express';

// Controllers
import { addVehicleBooking, getAllVehicleBooking, getAllVehicleBookingCount, deleteVehicleBooking, editVehicleBooking,  getSelectedVehicleBooking} from '../controllers/vehicleBooking.js';

const router = express.Router();

router.post('/add', addVehicleBooking);
router.get('/getAllVehicleBooking', getAllVehicleBooking);
router.post('/delete', deleteVehicleBooking);
router.post('/edit',editVehicleBooking);
router.post('/getSelectedVehicleBooking',getSelectedVehicleBooking);
router.get('/getAllVehicleBookingCount', getAllVehicleBookingCount);

export default router;