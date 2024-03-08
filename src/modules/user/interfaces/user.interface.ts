import { Document } from 'mongoose';

export interface User extends Document {
  readonly roleId?: string;
  readonly username?: string;
  readonly email: number;
  readonly password: string;
}
