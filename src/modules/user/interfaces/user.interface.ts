import { Document } from 'mongoose';

export interface User extends Document {
  readonly roleId?: string;
  readonly username?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email: number;
  readonly password: string;
}
