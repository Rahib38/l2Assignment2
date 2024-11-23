import { Bike } from './bike.interface';
import { BikeModel } from './bike.model';

const createBikeIntoDB = async (bike: Bike) => {
  const result = await BikeModel.create(bike);
  return result;
};

const getBikeIntoDB = async () => {
  const result = await BikeModel.find();
  return result;
};

export const BikeService = {
  createBikeIntoDB,
  getBikeIntoDB,
};
