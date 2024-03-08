import * as mongoose from 'mongoose';

export const SaleSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  invoiceNo: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  dueTermId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DueTerm',
  },
  dueDate: {
    type: Date,
  },
  saleItems: [
    {
      inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
      },
      qty: {
        type: Number,
      },
      rate: {
        type: Number,
      },
      amount: {
        type: Number,
      },
      hsnSacCode: {
        type: String,
      },
    },
  ],
  exchangeItems: [
    {
      title: {
        type: String,
      },
      year: {
        type: Number,
      },
      carNo: {
        type: String,
      },
      qty: {
        type: Number,
      },
      rate: {
        type: Number,
      },
      amount: {
        type: Number,
      },
      // Add other fields as needed
    },
  ],
  saleTotal: {
    type: Number,
  },
  exchangeTotal: {
    type: Number,
  },
  subTotal: {
    type: Number,
  },
  tcsRateInPercentage: {
    type: Number,

    default: 1,
  },
  tcs: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  amountInWords: {
    type: String,
  },
  notes: {
    type: String,
  },
  saleStatusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SaleStatus',
    default: '65e707b2c1e1cd3be6832afd',
  },

  // Other fields...
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define pre-save middleware
SaleSchema.pre('save', function (next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
