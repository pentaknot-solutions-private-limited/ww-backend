import { Document, Types } from 'mongoose';

// Define the Payment interface
export interface Payment extends Document {
  readonly saleId?: Types.ObjectId; // Use Types.ObjectId instead of string
  readonly modeOfPaymentId?: Types.ObjectId;
  readonly paymentNo?: number;
  readonly paymentDate?: Date;
  readonly amountReceived?: number;
  readonly bankCharges?: number;
  readonly referenceNo?: string;
  readonly notes?: string;
  readonly isActive?: boolean; // Use boolean instead of Boolean
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
