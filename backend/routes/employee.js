import express, { Router } from 'express';

// Controllers
import { addEmployee, getAllEmployees, deleteEmployee, editEmployee, getSelectedEmployee,  getAllEmployeesCount} from '../controllers/employee.js';

const router = express.Router();

router.post('/add', addEmployee);
router.get('/getAllEmployees', getAllEmployees);
router.post('/delete', deleteEmployee);
router.post('/edit',editEmployee);
router.post('/getSelectedEmployee',getSelectedEmployee);
router.get('/getAllEmployeesCount', getAllEmployeesCount);

export default router;