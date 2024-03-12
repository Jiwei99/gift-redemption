import { Router } from 'express';
import HealthCheckController from './controllers/HealthCheckController';
import RedemptionController from './controllers/RedemptionController';
import UploadController from './controllers/UploadController';

const router = Router();
router.use('/api/health_check', HealthCheckController);
router.use('/api/redemption', RedemptionController);
router.use('/api/upload', UploadController);

export default router;