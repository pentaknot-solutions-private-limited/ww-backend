import { Mongoose } from 'mongoose';
import { CustomerTypeSchema } from './schemas/customer-type.schema';

export const customerTypeProviders = [
  {
    provide: 'CUSTOMER_TYPE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('CustomerType', CustomerTypeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
