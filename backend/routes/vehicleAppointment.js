import express, { Router } from 'express';

// Controllers
import { addAppoinmentVehicle, getAllVehicleAppointments, getAllVehicleAppointmentCount,getAllDriving,getAllCompleted, deleteVehicleAppointment,editVehicleAppointment, getSelectedVehicleAppointment} from '../controllers/vehicleAppointment.js';

const router = express.Router();

router.post('/add', addAppoinmentVehicle);
router.get('/getAllVehicleAppointment', getAllVehicleAppointments);
router.post('/delete', deleteVehicleAppointment);
router.post('/edit',editVehicleAppointment);
router.post('/getSelectedVehicleAppointment',getSelectedVehicleAppointment);
router.get('/getAllVehicleCount', getAllVehicleAppointmentCount);
router.get('/getAllDriving', getAllDriving);
router.get('/getAllCompleted', getAllCompleted);
export default router;