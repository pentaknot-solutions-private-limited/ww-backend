import { Document } from 'mongoose';

export interface Salutation extends Document {
  readonly name?: string;
  readonly isBusiness?: boolean;
}
