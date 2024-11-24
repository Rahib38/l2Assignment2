import { model, Schema } from 'mongoose';
import { Bike } from './bike.interface';

const bikeSchema = new Schema<Bike>(
  {
    name: {
      type: String,
      required: [true, 'Bike name is required'], // Custom error message
      minlength: [6, 'Bike name must be at least 3 characters long'],
      maxlength: [20, 'Bike name cannot exceed 50 characters'],
      trim: true, // Removes extra whitespace
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      minlength: [6, 'Brand name must be at least 2 characters long'],
      maxlength: [20, 'Brand name cannot exceed 30 characters'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be at least 1'],
      max: [100000, 'Price cannot exceed 100,000'],
    },
    category: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: 'Category must be one of Mountain, Road, Hybrid, or Electric', // Custom error message
      },
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be less than 0'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer',
      },
    },
    inStock: {
      type: Boolean,
      required: [true, 'InStock field is required'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v; // Remove __v field from output
      },
    },
  },
);

export const BikeModel = model<Bike>('Bike', bikeSchema);
