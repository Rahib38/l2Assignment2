import { Request, Response } from 'express';
import { BikeService } from './bike.service';

const createBike = async (req: Request, res: Response) => {
  try {
    const bike = req.body;
    const result = await BikeService.createBikeIntoDB(bike);
    res.status(200).json({
      success: true,
      message: 'Bike is create successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
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
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};

const singleGetBike = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const bikeId = req.params.bikeId;
    const result = await BikeService.singleBikeIntoDB(bikeId);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};
const updateBike = async (req: Request, res: Response) => {
  try {
    const bikeId = req.params.bikeId;
    console.log(req.params);
    const body = req.body;
    const result = await BikeService.updateBikeIntoDB(bikeId, body);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};
const deleteBike = async (req: Request, res: Response) => {
  try {
    const bikeId = req.params.bikeId;
    const result = await BikeService.deleteBikeIntoDB(bikeId);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      result: {},
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};

export const bikeController = {
  createBike,
  getAllBike,
  singleGetBike,
  updateBike,
  deleteBike,
};
