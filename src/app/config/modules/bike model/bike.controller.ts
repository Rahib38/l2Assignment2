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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
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
  singleGetBike,
  updateBike,
  deleteBike,
};
