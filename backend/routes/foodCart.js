import express, { Router } from 'express';

import { addCartItems, getOrdersForSelectedPeriod, getRecordsForAOrder } from '../controllers/foodCart.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/add', catchAsync(addCartItems));
router.get('/getOrdersForSelectedPeriod/:startDate/:endDate', catchAsync(getOrdersForSelectedPeriod));
router.get('/getRecordsForAOrder/:nic' , catchAsync(getRecordsForAOrder));

export default router;