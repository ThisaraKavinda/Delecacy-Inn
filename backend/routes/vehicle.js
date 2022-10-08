import express, { Router } from 'express';

// Controllers
import { addVehicle, getAllVehicles, getAllVehicleCount, deleteVehicle,editVehicle, getSelectedVehicle,getAllavalable,editVehicleState} from '../controllers/vehicle.js';

const router = express.Router();

router.post('/add', addVehicle);
router.get('/getAllVehicles', getAllVehicles);
router.post('/delete', deleteVehicle);
router.post('/edit',editVehicle);
router.post('/getSelectedVehicle',getSelectedVehicle);
router.get('/getAllVehicleCount', getAllVehicleCount);
router.get('/getAllavalable', getAllavalable);
router.post('/editVehcleState', editVehicleState);

export default router;