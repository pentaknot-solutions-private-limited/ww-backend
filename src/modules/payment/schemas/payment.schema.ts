import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
  saleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sale',
    required: true,
  },
  paymentModeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentMode',
  },
  paymentNo: {
    type: Number,
    required: true,
    unique: true,
  },
  paymentDate: {
    type: Date,
  },
  amountReceived: {
    type: Number,
  },
  bankCharges: {
    type: Number,
  },
  referenceNo: {
    type: String,
  },
  notes: {
    type: String,
  },
  // Other fields...
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define pre-save middleware
PaymentSchema.pre('save', async function (this: any, next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();

  // AutoIncrement PaymentNo
  if (!this.isNew) {
    return next(); // If it's not a new document, don't increment
  }
  try {
    const lastPayment = await this.constructor.findOne(
      {},
      {},
      { sort: { paymentNo: -1 } },
    );
    if (lastPayment) {
      this.paymentNo = lastPayment.paymentNo + 1;
    } else {
      this.paymentNo = 1; // If there are no payments yet, start from 1
    }
    next();
  } catch (error) {
    next(error);
  }
});
