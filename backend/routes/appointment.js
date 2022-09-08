import express, { Router } from 'express';

// Controllers
import { addAppointment, getAllAppointments, deleteAppointment, editAppointment, getSelectedAppointment,  getAllAppointmentsCount} from '../controllers/appointment.js';

const router = express.Router();

router.post('/add', addAppointment);
router.get('/getAllAppointments', getAllAppointments);
router.post('/delete', deleteAppointment);
router.post('/edit',editAppointment);
router.post('/getSelectedAppointment',getSelectedAppointment);
router.get('/getAllAppointmentsCount', getAllAppointmentsCount);

export default router;