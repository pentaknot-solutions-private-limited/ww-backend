import * as mongoose from 'mongoose';

export const StateSchema = new mongoose.Schema({
  abbr: String,
  code: String,
  name: String,
});
