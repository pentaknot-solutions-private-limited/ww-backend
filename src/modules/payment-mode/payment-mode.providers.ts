import { Mongoose } from 'mongoose';
import { PaymentModeSchema } from './schemas/payment-mode.schema';

export const paymentModeProviders = [
  {
    provide: 'PAYMENT_MODE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('PaymentMode', PaymentModeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
