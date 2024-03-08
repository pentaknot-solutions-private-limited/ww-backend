import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  customerTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CustomerType',
  },
  salutationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Salutation',
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
  },
  placeOfSupplyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
  },
  firstName: String,
  middleName: String,
  lastName: String,
  companyName: String,
  legalEntityName: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  pincode: Number,
  mobileNo: String,
  altMobileNo: String,
  email: String,
  pan: String,
  gst: String,
  // Other fields...
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define pre-save middleware
CustomerSchema.pre('save', function (next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
