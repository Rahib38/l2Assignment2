import express from 'express';
import { bikeController } from './bike.controller';
const router = express.Router();

router.post('/create-bike', bikeController.createBike);
router.get('/:bikeId', bikeController.singleGetBike);
router.put('/:bikeId', bikeController.updateBike);
router.delete('/:bikeId', bikeController.deleteBike);
router.get('/', bikeController.getAllBike);
export const bikeRouter = router;
