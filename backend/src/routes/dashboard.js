import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { getStats } from '../controllers/dashboardController.js';

const router = Router();
router.use(authenticate);

router.get('/stats', getStats);

export default router;

