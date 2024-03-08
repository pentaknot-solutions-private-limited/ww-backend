import { Mongoose } from 'mongoose';
import { CustomerSchema } from './schemas/customer.schema';

export const customerProviders = [
  {
    provide: 'CUSTOMER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Customer', CustomerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
