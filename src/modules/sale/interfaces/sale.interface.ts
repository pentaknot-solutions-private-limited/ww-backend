import { Document, Types } from 'mongoose';

// Define the Sale item interface
export interface ISaleItem {
  readonly inventoryId?: Types.ObjectId; // Use Types.ObjectId instead of string
  readonly rate?: number;
  readonly hscOrSac?: string; // It seems hsnSacCode is a string
  readonly qty?: number;
  readonly per?: string;
  readonly amount?: number;
}

// Define the Exchange item interface
export interface IExchangeItem {
  readonly title?: string;
  readonly year?: number;
  readonly carNo?: string;
  readonly rate?: number;
  readonly hscOrSac?: number; // It seems hsnSacCode is a string
  readonly qty?: number;
  readonly per?: string;
  readonly amount?: number;
}

// Define the Sale interface
export interface Sale extends Document {
  readonly customerId?: Types.ObjectId; // Use Types.ObjectId instead of string
  readonly invoiceNo?: string;
  readonly invoiceDate?: Date;
  readonly dueTermId?: Types.ObjectId; // Use Types.ObjectId instead of string
  readonly dueDate?: Date;
  readonly saleItems?: ISaleItem[];
  readonly exchangeItems?: IExchangeItem[];
  readonly saleTotal?: number;
  readonly exchangeTotal?: number;
  readonly subTotal?: number;
  readonly tcsRateInPercentage?: number;
  readonly tcs?: number;
  readonly totalAmount?: number;
  readonly amountInWords?: string;
  readonly notes?: string;
  readonly saleStatusId?: Types.ObjectId;
  readonly isActive?: boolean; // Use boolean instead of Boolean
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
