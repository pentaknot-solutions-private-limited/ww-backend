import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  },
  username: String,
  email: Number,
  password: String,
});
