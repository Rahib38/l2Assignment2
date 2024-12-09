import express from 'express';
import { bikeController } from './bike.controller';
const router = express.Router();

router.post('/', bikeController.createBike);
router.get('/:productId', bikeController.singleGetBike);
router.put('/:productId', bikeController.updateBike);
router.delete('/:productId', bikeController.deleteBike);
router.get('/', bikeController.getAllBike);
export const bikeRouter = router;
