import express, { Router } from 'express';

import { addCartItems } from '../controllers/foodCart.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/add', catchAsync(addCartItems));

export default router;