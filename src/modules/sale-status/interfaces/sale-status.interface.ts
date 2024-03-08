import { Document } from 'mongoose';

export interface SaleStatus extends Document {
  readonly name?: string;
}
