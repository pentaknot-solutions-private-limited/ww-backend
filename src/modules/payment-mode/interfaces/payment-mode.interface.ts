import { Document } from 'mongoose';

export interface PaymentMode extends Document {
  readonly name?: string;
}
