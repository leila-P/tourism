import express from 'express';

import { getTourisms } from '../controllers/tourism.js';

const router = express.Router();

router.get('/', getTourisms);




export default router;