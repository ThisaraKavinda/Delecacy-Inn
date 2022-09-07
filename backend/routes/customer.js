import express, { Router } from 'express';

// Controllers
import { addCustomer, getAllCustomers, deleteCustomer, editCustomer, getSelectedCustomer,  getAllCustomersCount} from '../controllers/customer.js';

const router = express.Router();

router.post('/add', addCustomer);
router.get('/getAllCustomers', getAllCustomers);
router.post('/delete', deleteCustomer);
router.post('/edit',editCustomer);
router.post('/getSelectedCustomer',getSelectedCustomer);
router.get('/getAllCustomersCount', getAllCustomersCount);

export default router;