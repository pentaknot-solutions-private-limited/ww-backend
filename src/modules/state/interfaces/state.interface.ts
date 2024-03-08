import { Document } from 'mongoose';

export interface State extends Document {
  readonly abbr?: string;
  readonly code?: string;
  readonly name?: string;
}
