import * as mongoose from 'mongoose';

export const PaymentModeSchema = new mongoose.Schema({
  name: String,
});
