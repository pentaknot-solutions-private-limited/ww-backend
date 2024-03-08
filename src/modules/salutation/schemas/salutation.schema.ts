import * as mongoose from 'mongoose';

export const SalutationSchema = new mongoose.Schema({
  name: String,
  isBusiness: Boolean,
});
