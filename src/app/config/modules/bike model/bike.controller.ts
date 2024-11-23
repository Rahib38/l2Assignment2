import { Request, Response } from 'express';
import { BikeService } from './bike.service';

const createBike = async (req: Request, res: Response) => {
  try {
    const { bike: bikeData } = req.body;
    const result = await BikeService.createBikeIntoDB(bikeData);
    res.status(200).json({
      success: true,
      message: 'Bike is create successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

const getAllBike = async (req: Request, res: Response) => {
  try {
    const result = await BikeService.getBikeIntoDB();
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

export const bikeController = {
  createBike,
  getAllBike,
};
